/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Written by Brian McCarthy
 */

using System;

namespace PersonalCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            // Welcome message
            Console.WriteLine("Welcome to Your Personal Calculator!");
            Console.WriteLine("===================================");
            
            try 
            {
                // Task 2: Input Collection
                Console.WriteLine("Please enter your first number:");
                string input1 = Console.ReadLine();
                double firstNumber = Convert.ToDouble(input1);

                Console.WriteLine("Please enter your second number:");
                string input2 = Console.ReadLine();
                double secondNumber = Convert.ToDouble(input2);

                Console.WriteLine($"You entered: {firstNumber} and {secondNumber}");

                // Task 3: Menu System
                Console.WriteLine("\nChoose an operation:");
                Console.WriteLine("1. Addition (+)");
                Console.WriteLine("2. Subtraction (-)");
                Console.WriteLine("3. Multiplication (*)");
                Console.WriteLine("4. Division (/)");
                Console.WriteLine("5. Modulus (%)");
                Console.Write("Enter your choice (1-5): ");

                string choiceInput = Console.ReadLine();
                int choice = int.Parse(choiceInput);

                // Task 4: Calculation Logic
                double result = 0;
                string operation = "";

                if (choice == 1)
                {
                    result = firstNumber + secondNumber;
                    operation = "+";
                }
                else if (choice == 2)
                {
                    result = firstNumber - secondNumber;
                    operation = "-";
                }
                else if (choice == 3)
                {
                    result = firstNumber * secondNumber;
                    operation = "*";
                }
                else if (choice == 4)
                {
                    if (secondNumber == 0)
                    {
                        Console.WriteLine("Error: Cannot divide by zero.");
                        return;
                    }
                    result = firstNumber / secondNumber;
                    operation = "/";
                }
                else if (choice == 5)
                {
                    result = firstNumber % secondNumber;
                    operation = "%";
                }
                else
                {
                    Console.WriteLine("Invalid choice. Please run the program again.");
                    return;
                }

                // Result display
                Console.WriteLine($"{firstNumber} {operation} {secondNumber} = {result}");
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid input. Please enter numeric values.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An unexpected error occurred: {ex.Message}");
            }

            Console.WriteLine("Thank you for using the calculator!");
            Console.WriteLine("Press Enter to exit...");
            Console.ReadLine(); // Keep console open
        }
    }
}
