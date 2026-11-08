@SETLOCAL DISABLEDELAYEDEXPANSION & GOTO :run_python
"""
:run_python
@CMD /V:OFF /C vpython3.bat -x "%~f0" %*
@EXIT /B %ERRORLEVEL%
"""
_SCRIPT_LOCATION = __file__

import os
import re
import shlex
import signal
import subprocess
import sys
import time

_WRAPPED_PATH_RE = re.compile(r'@WrappedPath\(([^)]+)\)')
_PATH_TO_OUTPUT_DIR = '..'
_SCRIPT_DIR = os.path.dirname(os.path.realpath(_SCRIPT_LOCATION))


def ExpandWrappedPath(arg):
  m = _WRAPPED_PATH_RE.search(arg)
  if m:
    head = arg[:m.start()]
    tail = arg[m.end():]
    relpath = os.path.join(
        os.path.relpath(_SCRIPT_DIR), _PATH_TO_OUTPUT_DIR, m.group(1))
    npath = os.path.normpath(relpath)
    if os.path.sep not in npath:
      # If the original path points to something in the current directory,
      # returning the normalized version of it can be a problem.
      # normpath() strips off the './' part of the path
      # ('./foo' becomes 'foo'), which can be a problem if the result
      # is passed to something like os.execvp(); in that case
      # osexecvp() will search $PATH for the executable, rather than
      # just execing the arg directly, and if '.' isn't in $PATH, this
      # results in an error.
      #
      # So, we need to explicitly return './foo' (or '.\\foo' on windows)
      # instead of 'foo'.
      #
      # Hopefully there are no cases where this causes a problem; if
      # there are, we will either need to change the interface to
      # WrappedPath() somehow to distinguish between the two, or
      # somehow ensure that the wrapped executable doesn't hit cases
      # like this.
      return head + '.' + os.path.sep + npath + tail
    return head + npath + tail
  return arg


def ExpandWrappedPaths(args):
  for i, arg in enumerate(args):
    args[i] = ExpandWrappedPath(arg)
  return args


def FindIsolatedOutdir(raw_args):
  outdir = None
  i = 0
  remaining_args = []
  while i < len(raw_args):
    if raw_args[i] == '--isolated-outdir' and i < len(raw_args)-1:
      outdir = raw_args[i+1]
      i += 2
    elif raw_args[i].startswith('--isolated-outdir='):
      outdir = raw_args[i][len('--isolated-outdir='):]
      i += 1
    else:
      remaining_args.append(raw_args[i])
      i += 1
  if not outdir and 'ISOLATED_OUTDIR' in os.environ:
    outdir = os.environ['ISOLATED_OUTDIR']
  return outdir, remaining_args

def InsertWrapperScriptArgs(args):
  if '--wrapper-script-args' in args:
    idx = args.index('--wrapper-script-args')
    args.insert(idx + 1, shlex.join(sys.argv))

def FilterIsolatedOutdirBasedArgs(outdir, args):
  rargs = []
  i = 0
  while i < len(args):
    if 'ISOLATED_OUTDIR' in args[i]:
      if outdir:
        # Rewrite the arg.
        rargs.append(args[i].replace('${ISOLATED_OUTDIR}',
                                     outdir).replace(
          '$ISOLATED_OUTDIR', outdir))
        i += 1
      else:
        # Simply drop the arg.
        i += 1
    elif (not outdir and
          args[i].startswith('-') and
          '=' not in args[i] and
          i < len(args) - 1 and
          'ISOLATED_OUTDIR' in args[i+1]):
      # Parsing this case is ambiguous; if we're given
      # `--foo $ISOLATED_OUTDIR` we can't tell if $ISOLATED_OUTDIR
      # is meant to be the value of foo, or if foo takes no argument
      # and $ISOLATED_OUTDIR is the first positional arg.
      #
      # We assume the former will be much more common, and so we
      # need to drop --foo and $ISOLATED_OUTDIR.
      i += 2
    else:
      rargs.append(args[i])
      i += 1
  return rargs

def ForwardSignals(proc):
  def _sig_handler(sig, _):
    if proc.poll() is not None:
      return
    # SIGBREAK is defined only for win32.
    if sys.platform == 'win32' and sig == signal.SIGBREAK:
      print("Received signal(%d), sending CTRL_BREAK_EVENT to process %d" % (sig, proc.pid))
      proc.send_signal(signal.CTRL_BREAK_EVENT)
    else:
      print("Forwarding signal(%d) to process %d" % (sig, proc.pid))
      proc.send_signal(sig)
  if sys.platform == 'win32':
    signal.signal(signal.SIGBREAK, _sig_handler)
  else:
    signal.signal(signal.SIGTERM, _sig_handler)
    signal.signal(signal.SIGINT, _sig_handler)

def Popen(*args, **kwargs):
  assert 'creationflags' not in kwargs
  if sys.platform == 'win32':
    # Necessary for signal handling. See crbug.com/733612#c6.
    kwargs['creationflags'] = subprocess.CREATE_NEW_PROCESS_GROUP
  return subprocess.Popen(*args, **kwargs)

def RunCommand(cmd):
  process = Popen(cmd)
  ForwardSignals(process)
  while process.poll() is None:
    time.sleep(0.1)
  return process.returncode


def main(raw_args):
  executable_path = ExpandWrappedPath('@WrappedPath(../../testing/test_env.py)')
  outdir, remaining_args = FindIsolatedOutdir(raw_args)
  args = ['@WrappedPath(./brave_interactive_ui_tests)', '--test-launcher-bot-mode']
  InsertWrapperScriptArgs(args)
  args = FilterIsolatedOutdirBasedArgs(outdir, args)
  executable_args = ExpandWrappedPaths(args)
  cmd = [executable_path] + executable_args + remaining_args
  if executable_path.endswith('.py'):
    cmd = [sys.executable] + cmd
  return RunCommand(cmd)


if __name__ == '__main__':
  sys.exit(main(sys.argv[1:]))

