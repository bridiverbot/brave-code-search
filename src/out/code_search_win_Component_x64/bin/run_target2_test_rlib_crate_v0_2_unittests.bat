@echo off
vpython3 "%~dp0\../../../testing/scripts/rust\rust_main_program.py" ^
    "--rust-test-executable=%~dp0\..\target2_test_rlib_crate_v0_2_unittests.exe" ^
    %*