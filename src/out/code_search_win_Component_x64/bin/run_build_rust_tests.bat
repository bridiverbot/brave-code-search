@echo off
vpython3 "%~dp0\../../../testing/scripts/rust\rust_main_program.py" ^
    "--rust-test-executable=%~dp0\..\bindgen_static_fns_test_lib_unittests.exe" ^
    "--rust-test-executable=%~dp0\..\bindgen_test_lib_unittests.exe" ^
    "--rust-test-executable=%~dp0\..\foo_tests.exe" ^
    "--rust-test-executable=%~dp0\..\target1_test_rlib_crate_v0_2_unittests.exe" ^
    "--rust-test-executable=%~dp0\..\target2_test_rlib_crate_v0_2_unittests.exe" ^
    "--rust-test-executable=%~dp0\..\test_aliased_deps_unittests.exe" ^
    "--rust-test-executable=%~dp0\..\test_lib_v1_unittests.exe" ^
    "--rust-test-executable=%~dp0\..\test_lib_v2_unittests.exe" ^
    "--rust-test-executable=%~dp0\..\test_rust_exe_unittests.exe" ^
    "--rust-test-executable=%~dp0\..\test_rust_metadata_unittests.exe" ^
    "--rust-test-executable=%~dp0\..\test_rust_static_library_unittests.exe" ^
    "--rust-test-executable=%~dp0\..\test_rust_unittests.exe" ^
    %*