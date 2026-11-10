/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Red Hat, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice (including the next
 * paragraph) shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

#include "util-bits.h"

#if _enable_tests_
#include "util-munit.h"

MUNIT_TEST(test_bits_flag_32)
{
	uint32_t mask = 0;

	munit_assert_true(flag_fits(mask, 0));
	munit_assert_true(flag_fits(mask, 31));
	munit_assert_false(flag_fits(mask, 32));
	munit_assert_false(flag_fits(mask, -1));

	flag_set(mask, 0);
	munit_assert_true(flag_is_set(mask, 0));
	munit_assert_false(flag_is_set(mask, 31));
	munit_assert_false(flag_is_set(mask, 32));
	flag_set(mask, 31);
	munit_assert_true(flag_is_set(mask, 0));
	munit_assert_true(flag_is_set(mask, 31));
	munit_assert_false(flag_is_set(mask, 32));
	flag_set(mask, 32); /* silently ignored */
	munit_assert_true(flag_is_set(mask, 0));
	munit_assert_true(flag_is_set(mask, 31));
	munit_assert_false(flag_is_set(mask, 32));

	munit_assert_int(mask, ==, 0x80000001);

	flag_clear(mask, 0);
	munit_assert_false(flag_is_set(mask, 0));
	munit_assert_true(flag_is_set(mask, 31));
	munit_assert_false(flag_is_set(mask, 32));
	flag_clear(mask, 31);
	munit_assert_false(flag_is_set(mask, 0));
	munit_assert_false(flag_is_set(mask, 31));
	munit_assert_false(flag_is_set(mask, 32));
	flag_clear(mask, 32);
	munit_assert_false(flag_is_set(mask, 0));
	munit_assert_false(flag_is_set(mask, 31));
	munit_assert_false(flag_is_set(mask, 32));

	return MUNIT_OK;
}

MUNIT_TEST(test_bits_flag_8)
{
	uint8_t mask = 0;

	munit_assert_true(flag_fits(mask, 0));
	munit_assert_true(flag_fits(mask, 7));
	munit_assert_false(flag_fits(mask, 8));
	munit_assert_false(flag_fits(mask, -1));

	flag_set(mask, 0);
	munit_assert_true(flag_is_set(mask, 0));
	munit_assert_false(flag_is_set(mask, 7));
	munit_assert_false(flag_is_set(mask, 8));
	flag_set(mask, 7);
	munit_assert_true(flag_is_set(mask, 0));
	munit_assert_true(flag_is_set(mask, 7));
	munit_assert_false(flag_is_set(mask, 8));
	flag_set(mask, 8); /* silently ignored */
	munit_assert_true(flag_is_set(mask, 0));
	munit_assert_true(flag_is_set(mask, 7));
	munit_assert_false(flag_is_set(mask, 8));

	munit_assert_int(mask, ==, 0x81);

	flag_clear(mask, 0);
	munit_assert_false(flag_is_set(mask, 0));
	munit_assert_true(flag_is_set(mask, 7));
	munit_assert_false(flag_is_set(mask, 8));
	flag_clear(mask, 7);
	munit_assert_false(flag_is_set(mask, 0));
	munit_assert_false(flag_is_set(mask, 7));
	munit_assert_false(flag_is_set(mask, 8));
	flag_clear(mask, 8);
	munit_assert_false(flag_is_set(mask, 0));
	munit_assert_false(flag_is_set(mask, 7));
	munit_assert_false(flag_is_set(mask, 8));

	return MUNIT_OK;
}

MUNIT_TEST(test_bits_mask)
{
	munit_assert_true(mask_any(5, 3));
	munit_assert_true(mask_any(5, 1));
	munit_assert_false(mask_any(5, 2));

	munit_assert_true(mask_all(5, 5));
	munit_assert_true(mask_all(5, 1));
	munit_assert_true(mask_all(5, 4));

	munit_assert_false(mask_all(5, 6));
	munit_assert_false(mask_all(5, 3));

	munit_assert_true(mask_all(13, 5));
	munit_assert_true(mask_all(13, 12));

	munit_assert_true(mask_none(21, 10));
	munit_assert_false(mask_none(21, 5));

	uint8_t mask = 0;
	mask_add(mask, 5);
	munit_assert_int(mask, ==, 5);
	mask_add(mask, 2);
	munit_assert_int(mask, ==, 7);
	mask_remove(mask, 2);
	munit_assert_int(mask, ==, 5);

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_from_u32)
{
	bitmask_t mask1 = bitmask_from_u32(0x12345678U);
	munit_assert_uint32(bitmask_as_u32(mask1), ==, 0x12345678U);

	bitmask_t mask2 = bitmask_from_u32(0);
	munit_assert_uint32(bitmask_as_u32(mask2), ==, 0U);

	bitmask_t mask3 = bitmask_from_u32(0xFFFFFFFFU);
	munit_assert_uint32(bitmask_as_u32(mask3), ==, 0xFFFFFFFFU);

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_is_empty)
{
	bitmask_t mask1 = bitmask_new();
	munit_assert_true(bitmask_is_empty(mask1));

	bitmask_t mask2 = bitmask_from_u32(0x00000001U);
	munit_assert_false(bitmask_is_empty(mask2));

	bitmask_t mask3 = bitmask_from_u32(0xFFFFFFFFU);
	munit_assert_false(bitmask_is_empty(mask3));

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_any)
{
	bitmask_t mask1 = bitmask_from_u32(0x0000000FU);
	bitmask_t bits1 = bitmask_from_u32(0x00000003U);
	munit_assert_true(bitmask_any(mask1, bits1));

	bitmask_t mask2 = bitmask_from_u32(0x0000000FU);
	bitmask_t bits2 = bitmask_from_u32(0x000000F0U);
	munit_assert_false(bitmask_any(mask2, bits2));

	bitmask_t mask3 = bitmask_from_u32(0x00000000U);
	bitmask_t bits3 = bitmask_from_u32(0x00000001U);
	munit_assert_false(bitmask_any(mask3, bits3));

	bitmask_t mask4 = bitmask_from_u32(0xFFFFFFFFU);
	bitmask_t bits4 = bitmask_from_u32(0xFFFFFFFFU);
	munit_assert_true(bitmask_any(mask4, bits4));

	bitmask_t mask5 = bitmask_from_u32(0x10000000U);
	bitmask_t bits5 = bitmask_from_u32(0x10000000U);
	munit_assert_true(bitmask_any(mask5, bits5));

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_all)
{
	bitmask_t mask1 = bitmask_from_u32(0x0000000FU);
	bitmask_t bits1 = bitmask_from_u32(0x00000003U);
	munit_assert_true(bitmask_all(mask1, bits1));
	munit_assert_false(bitmask_all(bits1, mask1));

	bitmask_t mask2 = bitmask_from_u32(0x0000000FU);
	bitmask_t bits2 = bitmask_from_u32(0x0000000FU);
	munit_assert_true(bitmask_all(mask2, bits2));
	munit_assert_true(bitmask_all(bits2, mask2));

	bitmask_t mask3 = bitmask_from_u32(0x00000000U);
	bitmask_t bits3 = bitmask_from_u32(0x00000000U);
	munit_assert_false(bitmask_all(mask3, bits3)); /* zero is special */

	bitmask_t mask4 = bitmask_from_u32(0xFFFFFFFFU);
	bitmask_t bits4 = bitmask_from_u32(0xFFFFFFFFU);
	munit_assert_true(bitmask_all(mask4, bits4));

	bitmask_t mask5 = bitmask_from_u32(0x10000000U);
	bitmask_t bits5 = bitmask_from_u32(0x10000000U);
	munit_assert_true(bitmask_all(mask5, bits5));

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_merge)
{
	bitmask_t mask1 = bitmask_from_u32(0x0000000FU);
	bitmask_t bits1 = bitmask_from_u32(0x000000F0U);
	munit_assert_false(bitmask_merge(&mask1, bits1));
	munit_assert_uint32(mask1.mask, ==, 0x000000FFU);

	bitmask_t mask2 = bitmask_from_u32(0x0000000FU);
	bitmask_t bits2 = bitmask_from_u32(0x0000000FU);
	munit_assert_true(bitmask_merge(&mask2, bits2));
	munit_assert_uint32(mask2.mask, ==, 0x0000000FU);

	bitmask_t mask3 = bitmask_new();
	bitmask_t bits3 = bitmask_from_u32(0xFFFFFFFFU);
	munit_assert_false(bitmask_merge(&mask3, bits3));
	munit_assert_uint32(mask3.mask, ==, 0xFFFFFFFFU);

	bitmask_t mask4 = bitmask_from_u32(0x80000000U);
	bitmask_t bits4 = bitmask_from_u32(0x00000001U);
	munit_assert_false(bitmask_merge(&mask4, bits4));
	munit_assert_uint32(mask4.mask, ==, 0x80000001U);

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_clear)
{
	bitmask_t mask1 = bitmask_from_u32(0x000000FFU);
	bitmask_t bits1 = bitmask_from_u32(0x0000000FU);
	munit_assert_true(bitmask_clear(&mask1, bits1));
	munit_assert_uint32(mask1.mask, ==, 0x000000F0U);

	bitmask_t mask2 = bitmask_from_u32(0x0000000FU);
	bitmask_t bits2 = bitmask_from_u32(0x0000000FU);
	munit_assert_true(bitmask_clear(&mask2, bits2));
	munit_assert_uint32(mask2.mask, ==, 0x00000000U);

	bitmask_t mask3 = bitmask_from_u32(0xFFFFFFFFU);
	bitmask_t bits3 = bitmask_from_u32(0x00000000U);
	munit_assert_false(bitmask_clear(&mask3, bits3)); /* zero is special */
	munit_assert_uint32(mask3.mask, ==, 0xFFFFFFFFU);

	bitmask_t mask4 = bitmask_from_u32(0xFFFFFFFFU);
	bitmask_t bits4 = bitmask_from_u32(0xFFFFFFFFU);
	munit_assert_true(bitmask_clear(&mask4, bits4));
	munit_assert_uint32(mask4.mask, ==, 0x0U);

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_bit_is_set)
{
	bitmask_t mask1 = bitmask_from_u32(0x00000001U);
	munit_assert_true(bitmask_bit_is_set(mask1, 0));
	munit_assert_false(bitmask_bit_is_set(mask1, 1));

	bitmask_t mask2 = bitmask_from_u32(0x80000000U);
	munit_assert_true(bitmask_bit_is_set(mask2, 31));
	munit_assert_false(bitmask_bit_is_set(mask2, 0));

	bitmask_t mask3 = bitmask_from_u32(0xFFFFFFFFU);
	munit_assert_true(bitmask_bit_is_set(mask3, 0));
	munit_assert_true(bitmask_bit_is_set(mask3, 31));
	munit_assert_true(bitmask_bit_is_set(mask3, 16));

	bitmask_t mask4 = bitmask_new();
	munit_assert_false(bitmask_bit_is_set(mask4, 0));
	munit_assert_false(bitmask_bit_is_set(mask4, 1));

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_set_bit)
{
	bitmask_t mask1 = bitmask_new();
	munit_assert_false(bitmask_set_bit(&mask1, 0));
	munit_assert_uint32(mask1.mask, ==, 0x00000001U);

	munit_assert_true(bitmask_set_bit(&mask1, 0));
	munit_assert_uint32(mask1.mask, ==, 0x00000001U);

	munit_assert_false(bitmask_set_bit(&mask1, 31));
	munit_assert_uint32(mask1.mask, ==, 0x80000001U);

	bitmask_t mask2 = bitmask_from_u32(0x0000000FU);
	munit_assert_false(bitmask_set_bit(&mask2, 4));
	munit_assert_uint32(mask2.mask, ==, 0x0000001FU);
	munit_assert_true(bitmask_set_bit(&mask2, 4));
	munit_assert_uint32(mask2.mask, ==, 0x0000001FU);

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_clear_bit)
{
	bitmask_t mask1 = bitmask_from_u32(0xFFFFFFFFU);
	munit_assert_true(bitmask_clear_bit(&mask1, 0));
	munit_assert_uint32(mask1.mask, ==, 0xFFFFFFFEU);

	munit_assert_false(bitmask_clear_bit(&mask1, 0));
	munit_assert_uint32(mask1.mask, ==, 0xFFFFFFFEU);

	munit_assert_true(bitmask_clear_bit(&mask1, 31));
	munit_assert_uint32(mask1.mask, ==, 0x7FFFFFFEU);

	bitmask_t mask2 = bitmask_from_u32(0x0000001FU);
	munit_assert_true(bitmask_clear_bit(&mask2, 4));
	munit_assert_uint32(mask2.mask, ==, 0x0000000FU);
	munit_assert_false(bitmask_clear_bit(&mask2, 4));
	munit_assert_uint32(mask2.mask, ==, 0x0000000FU);

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_from_bit)
{
	bitmask_t mask1 = bitmask_from_bit(0);
	munit_assert_uint32(mask1.mask, ==, 0x00000001U);

	bitmask_t mask2 = bitmask_from_bit(31);
	munit_assert_uint32(mask2.mask, ==, 0x80000000U);

	bitmask_t mask3 = bitmask_from_bit(16);
	munit_assert_uint32(mask3.mask, ==, 0x00010000U);

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_from_bits)
{
	bitmask_t mask1 = bitmask_from_bits(1, 2, 5);
	munit_assert_uint32(mask1.mask, ==, bit(1) | bit(2) | bit(5));

	bitmask_t mask2 = bitmask_from_bits(0);
	munit_assert_uint32(mask2.mask, ==, bit(0));

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_from_flags)
{
	bitmask_t mask1 = bitmask_from_flags(0x1, 0x2, 0x8);
	munit_assert_uint32(mask1.mask, ==, 0x0000000BU);

	bitmask_t mask2 = bitmask_from_flags(0x0);
	munit_assert_uint32(mask2.mask, ==, 0x00000000U);

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_or)
{
	/* Disjoint bits */
	bitmask_t a = bitmask_from_u32(0x0000000FU);
	bitmask_t b = bitmask_from_u32(0x000000F0U);
	bitmask_t r = bitmask_or(a, b);
	munit_assert_uint32(bitmask_as_u32(r), ==, 0x000000FFU);
	/* inputs unchanged */
	munit_assert_uint32(bitmask_as_u32(a), ==, 0x0000000FU);
	munit_assert_uint32(bitmask_as_u32(b), ==, 0x000000F0U);

	/* Overlapping bits */
	r = bitmask_or(bitmask_from_u32(0x0FU), bitmask_from_u32(0x0FU));
	munit_assert_uint32(bitmask_as_u32(r), ==, 0x0FU);

	/* One side empty */
	r = bitmask_or(bitmask_from_u32(0xABU), bitmask_new());
	munit_assert_uint32(bitmask_as_u32(r), ==, 0xABU);
	r = bitmask_or(bitmask_new(), bitmask_from_u32(0xABU));
	munit_assert_uint32(bitmask_as_u32(r), ==, 0xABU);

	/* Both empty */
	r = bitmask_or(bitmask_new(), bitmask_new());
	munit_assert_true(bitmask_is_empty(r));

	/* Full masks */
	r = bitmask_or(bitmask_from_u32(0xFFFFFFFFU), bitmask_from_u32(0xFFFFFFFFU));
	munit_assert_uint32(bitmask_as_u32(r), ==, 0xFFFFFFFFU);

	/* High bit */
	r = bitmask_or(bitmask_from_u32(0x80000000U), bitmask_from_u32(0x00000001U));
	munit_assert_uint32(bitmask_as_u32(r), ==, 0x80000001U);

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_and)
{
	/* Overlapping bits */
	bitmask_t a = bitmask_from_u32(0x000000FFU);
	bitmask_t b = bitmask_from_u32(0x0000000FU);
	bitmask_t r = bitmask_and(a, b);
	munit_assert_uint32(bitmask_as_u32(r), ==, 0x0000000FU);
	/* inputs unchanged */
	munit_assert_uint32(bitmask_as_u32(a), ==, 0x000000FFU);
	munit_assert_uint32(bitmask_as_u32(b), ==, 0x0000000FU);

	/* Disjoint bits */
	r = bitmask_and(bitmask_from_u32(0x0FU), bitmask_from_u32(0xF0U));
	munit_assert_true(bitmask_is_empty(r));

	/* One side empty */
	r = bitmask_and(bitmask_from_u32(0xFFU), bitmask_new());
	munit_assert_true(bitmask_is_empty(r));
	r = bitmask_and(bitmask_new(), bitmask_from_u32(0xFFU));
	munit_assert_true(bitmask_is_empty(r));

	/* Identity: AND with all-ones */
	r = bitmask_and(bitmask_from_u32(0x12345678U), bitmask_from_u32(0xFFFFFFFFU));
	munit_assert_uint32(bitmask_as_u32(r), ==, 0x12345678U);

	/* Same mask */
	r = bitmask_and(bitmask_from_u32(0xABCDU), bitmask_from_u32(0xABCDU));
	munit_assert_uint32(bitmask_as_u32(r), ==, 0xABCDU);

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_not)
{
	/* Invert zeros to ones */
	bitmask_t a = bitmask_new();
	bitmask_t r = bitmask_not(a);
	munit_assert_uint32(bitmask_as_u32(r), ==, 0xFFFFFFFFU);
	/* input unchanged */
	munit_assert_true(bitmask_is_empty(a));

	/* Invert ones to zeros */
	r = bitmask_not(bitmask_from_u32(0xFFFFFFFFU));
	munit_assert_true(bitmask_is_empty(r));

	/* Partial inversion */
	r = bitmask_not(bitmask_from_u32(0x0000000FU));
	munit_assert_uint32(bitmask_as_u32(r), ==, 0xFFFFFFF0U);

	/* Double inversion is identity */
	bitmask_t orig = bitmask_from_u32(0x12345678U);
	r = bitmask_not(bitmask_not(orig));
	munit_assert_uint32(bitmask_as_u32(r), ==, bitmask_as_u32(orig));

	/* Single bit */
	r = bitmask_not(bitmask_from_bit(0));
	munit_assert_uint32(bitmask_as_u32(r), ==, 0xFFFFFFFEU);
	r = bitmask_not(bitmask_from_bit(31));
	munit_assert_uint32(bitmask_as_u32(r), ==, 0x7FFFFFFFU);

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_xor)
{
	/* Disjoint bits: XOR is same as OR */
	bitmask_t a = bitmask_from_u32(0x0000000FU);
	bitmask_t b = bitmask_from_u32(0x000000F0U);
	bitmask_t r = bitmask_xor(a, b);
	munit_assert_uint32(bitmask_as_u32(r), ==, 0x000000FFU);
	/* inputs unchanged */
	munit_assert_uint32(bitmask_as_u32(a), ==, 0x0000000FU);
	munit_assert_uint32(bitmask_as_u32(b), ==, 0x000000F0U);

	/* Same mask: XOR gives zero */
	r = bitmask_xor(bitmask_from_u32(0xABCDU), bitmask_from_u32(0xABCDU));
	munit_assert_true(bitmask_is_empty(r));

	/* XOR with zero is identity */
	r = bitmask_xor(bitmask_from_u32(0x12345678U), bitmask_new());
	munit_assert_uint32(bitmask_as_u32(r), ==, 0x12345678U);
	r = bitmask_xor(bitmask_new(), bitmask_from_u32(0x12345678U));
	munit_assert_uint32(bitmask_as_u32(r), ==, 0x12345678U);

	/* XOR with all-ones is NOT */
	r = bitmask_xor(bitmask_from_u32(0x0000000FU), bitmask_from_u32(0xFFFFFFFFU));
	munit_assert_uint32(bitmask_as_u32(r), ==, 0xFFFFFFF0U);

	/* Partial overlap */
	r = bitmask_xor(bitmask_from_u32(0x0FFU), bitmask_from_u32(0xFF0U));
	munit_assert_uint32(bitmask_as_u32(r), ==, 0xF0FU);

	/* Both empty */
	r = bitmask_xor(bitmask_new(), bitmask_new());
	munit_assert_true(bitmask_is_empty(r));

	return MUNIT_OK;
}

MUNIT_TEST(test_bitmask_or_and_not_identity)
{
	/* De Morgan's law: NOT(A AND B) == NOT(A) OR NOT(B) */
	bitmask_t a = bitmask_from_u32(0x0F0F0F0FU);
	bitmask_t b = bitmask_from_u32(0x00FF00FFU);
	bitmask_t lhs = bitmask_not(bitmask_and(a, b));
	bitmask_t rhs = bitmask_or(bitmask_not(a), bitmask_not(b));
	munit_assert_uint32(bitmask_as_u32(lhs), ==, bitmask_as_u32(rhs));

	/* De Morgan's law: NOT(A OR B) == NOT(A) AND NOT(B) */
	lhs = bitmask_not(bitmask_or(a, b));
	rhs = bitmask_and(bitmask_not(a), bitmask_not(b));
	munit_assert_uint32(bitmask_as_u32(lhs), ==, bitmask_as_u32(rhs));

	/* XOR via AND/OR/NOT: A XOR B == (A OR B) AND NOT(A AND B) */
	lhs = bitmask_xor(a, b);
	rhs = bitmask_and(bitmask_or(a, b), bitmask_not(bitmask_and(a, b)));
	munit_assert_uint32(bitmask_as_u32(lhs), ==, bitmask_as_u32(rhs));

	return MUNIT_OK;
}

#endif
