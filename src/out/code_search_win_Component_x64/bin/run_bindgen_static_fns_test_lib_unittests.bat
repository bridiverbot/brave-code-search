@echo off
vpython3 "%~dp0\../../../testing/scripts/rust\rust_main_program.py" ^
    "--rust-test-executable=%~dp0\..\bindgen_static_fns_test_lib_unittests.exe" ^
    %*