@echo off
vpython3 "%~dp0\../../../testing/scripts/rust\rust_main_program.py" ^
    "--rust-test-executable=%~dp0\..\test_rust_metadata_unittests.exe" ^
    %*