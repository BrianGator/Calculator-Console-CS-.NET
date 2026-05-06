/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Written by Brian McCarthy
 */

using System;

namespace PersonalCalculator.Helpers
{
    public static class InputValidator
    {
        public static bool TryParseDouble(string input, out double result)
        {
            return double.TryParse(input, out result);
        }

        public static bool IsValidChoice(int choice)
        {
            return choice >= 1 && choice <= 5;
        }
    }
}
