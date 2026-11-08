#include "../../build/rust/tests/bindgen_static_fns_test/lib.h"

// Static wrappers

uint32_t mul_three_numbers__extern(uint32_t a, uint32_t b, uint32_t c) { return mul_three_numbers(a, b, c); }
