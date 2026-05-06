/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Written by Brian McCarthy
 */

using System;
using PersonalCalculator.Models;
using PersonalCalculator.Helpers;

namespace PersonalCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            CalculatorEngine engine = new CalculatorEngine();
            
            Console.WriteLine("Welcome to Your Personal Calculator!");
            Console.WriteLine("===================================");
            
            try 
            {
                Console.WriteLine("Please enter your first number:");
                if (!InputValidator.TryParseDouble(Console.ReadLine(), out double firstNumber))
                {
                    Console.WriteLine("Invalid input. Numeric values only.");
                    return;
                }

                Console.WriteLine("Please enter your second number:");
                if (!InputValidator.TryParseDouble(Console.ReadLine(), out double secondNumber))
                {
                    Console.WriteLine("Invalid input. Numeric values only.");
                    return;
                }

                Console.WriteLine("\nChoose an operation:");
                Console.WriteLine("1. Addition (+)");
                Console.WriteLine("2. Subtraction (-)");
                Console.WriteLine("3. Multiplication (*)");
                Console.WriteLine("4. Division (/)");
                Console.WriteLine("5. Modulus (%)");
                Console.Write("Enter your choice (1-5): ");

                if (!int.TryParse(Console.ReadLine(), out int choice) || !InputValidator.IsValidChoice(choice))
                {
                    Console.WriteLine("Invalid choice. Please run the program again.");
                    return;
                }

                double result = 0;
                string op = "";

                switch(choice)
                {
                    case 1: result = engine.Add(firstNumber, secondNumber); op = "+"; break;
                    case 2: result = engine.Subtract(firstNumber, secondNumber); op = "-"; break;
                    case 3: result = engine.Multiply(firstNumber, secondNumber); op = "*"; break;
                    case 4: result = engine.Divide(firstNumber, secondNumber); op = "/"; break;
                    case 5: result = engine.Modulus(firstNumber, secondNumber); op = "%"; break;
                }

                Console.WriteLine($"{firstNumber} {op} {secondNumber} = {result}");
            }
            catch (DivideByZeroException)
            {
                Console.WriteLine("Error: Cannot divide by zero.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An unexpected error occurred: {ex.Message}");
            }

            Console.WriteLine("Thank you for using the calculator!");
            Console.ReadLine();
        }
    }
}
