# Pro Calculator - C# Console Edition
**Written by Brian McCarthy**

## Project Description
This project is a comprehensive C# console-based calculator designed to illustrate the full software development lifecycle (SDLC). It features a robust arithmetic engine with user-friendly input validation, error handling, and an extensive suite of automated tests across multiple frameworks and methodologies.

## Key Features Implemented
- **Basic Arithmetic**: Addition, Subtraction, Multiplication, Division, and Modulus.
- **Robust Input Validation**: Handles non-numeric inputs and division-by-zero scenarios gracefully.
- **Modern C# Syntax**: Uses string interpolation, exception handling, and clean code principles.
- **Extensive Testing Suite**: 100+ tests spanning Selenium, Playwright, Cypress, Cucumber, and various performance/security benchmarks.
- **Professional Documentation**: Full development requirements and test reporting.

## Project Structure
- `PersonalCalculator.sln`: C# Solution.
- `Models/`: Domain logic classes.
- `Helpers/`: Validation utilities.
- `Program.cs`: Entry point.
- `Dev-Requirements.txt`: Technical specifications.
- `test_report.md`: QA Summary.
- `Selenium-Tests/`: 15 C# Selenium WebDriver tests.
- `Playwright-Tests/`: 15 C# Playwright tests.
- `Cypress-Tests/`: 15 JavaScript Cypress tests.
- `Cucumber-Tests/`: 15 BDD Gherkin/SpecFlow tests.
- `Load-Tests/`: 8 Performance load benchmarks.
- `Stress-Tests/`: 8 System stability tests.
- `Performance-Tests/`: 8 Execution speed benchmarks.
- `Unit-Tests/`: 8 Component-level logic tests.
- `System-Tests/`: 8 Full environment tests.
- `Integration-Tests/`: 8 Module communication tests.
- `Security-Tests/`: 8 Boundary and sanitization tests.
- `End-to-End-Tests/`: 8 High-level user journey tests.

## How to Use
1. **Application**: Compile `Program.cs` and run the executable. Follow the on-screen menu to perform calculations.
2. **Tests**: Each test folder contains its own configuration and source files. Use the respective test runner (NUnit, Playwright CLI, Cypress, etc.) to execute.

## Testing Types & Descriptions

| Category | Description | Count | Status |
|----------|-------------|-------|--------|
| **Selenium** | Browser-based UI automation simulating the console interface. | 15 | PASSED |
| **Playwright** | Modern headless browser automation for high-speed verification. | 15 | PASSED |
| **Cypress** | Frontend E2E testing for the web-based simulation. | 15 | PASSED |
| **Cucumber** | BDD scenarios verifying user requirements in plain English. | 15 | PASSED |
| **Load** | Verifies application performance under high-frequency operation. | 8 | PASSED |
| **Stress** | Tests the application limits with extreme input values. | 8 | PASSED |
| **Performance** | Benchmarks calculation speeds and memory footprint. | 8 | PASSED |
| **Unit** | Atomic tests for individual methods and logic branches. | 8 | PASSED |
| **System** | Validates the application within its runtime environment. | 8 | PASSED |
| **Integration** | Checks the interaction between input, logic, and output layers. | 8 | PASSED |
| **Security** | Ensures safety against input poisoning and overflows. | 8 | PASSED |
| **End-to-End** | Validates the complete user flowchart from start to finish. | 8 | PASSED |

---
*Created as a capstone project for professional C# development certification.*
