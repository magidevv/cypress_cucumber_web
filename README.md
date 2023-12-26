# Project Repository Summary

This ReadMe provides detailed information about the updated project repository, including its summary, requirements, installation steps, launching instructions, and progress on steps to create a report.

## Summary of Repository

The project repository is organized into the following directories and files:

- `.github`: GitHub-related files, including workflows.
- `cypress`:
  - `e2e (features)`: Cucumber feature files specifying scenarios.
  - `fixtures`: Test data and fixtures for Cypress tests.
  - `helper`: Custom Cypress helper functions.
  - `pages`: Cypress page objects.
  - `reports`: Generated Cypress HTML reports.
  - `support (step_definitions)`: Step definitions for Cucumber scenarios.
- `.env`: Environment variables configuration.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `cypress.config.js`: Configuration file for Cypress.
- `mobile-config.js`: Configuration file for mobile tests.
- `tablet-config.js`: Configuration file for tablet tests.
- `package.json`: Node.js package configuration for the project.
- `README.md`: Documentation for the project.

## Requirements

Ensure your system meets the following requirements to run the project successfully:

- Operating System: Windows 10 and above (64-bit only).
- Node.js: Version 18.x and Node.js 20.x and above.
- Environment Variables (Secrets):
  - `ENV`: Environment variable for configuration.
  - `USER_LOGIN`: User login for testing.
  - `USER_PASSWORD`: User password for testing.

## Steps to Install

Follow these steps to install the project from the GitHub repository and connect all necessary dependencies using `npm install`:

1. Clone the project repository from GitHub:
   ```bash
   git clone https://github.com/magidevv/cypress_cucumber_web.git
   ```

2. Change your working directory to the project folder:
   ```bash
   cd your-repo
   ```

3. Install project dependencies using npm:
   ```bash
   npm install
   ```

## Steps to Launch

To run various scripts included in the project, use the following NPM scripts defined in your `package.json`:

- **test:all**: Run all Cypress tests.
   ```bash
   npm run test:all
   ```
- **test:mobile**: Run Cypress tests with mobile configuration.
   ```bash
   npm run test:mobile
   ```
- **test:tablet**: Run Cypress tests with tablet configuration.
   ```bash
   npm run test:tablet
   ```
- **test:all:headed**: Run all Cypress tests in headed (GUI) mode.
   ```bash
   npm run test:all:headed
   ```
- **test:all:mobile:headed**: Run Cypress tests with mobile configuration in headed mode.
   ```bash
   npm run test:all:mobile:headed
   ```
- **test:all:tablet:headed**: Run Cypress tests with tablet configuration in headed mode.
   ```bash
   npm run test:all:tablet:headed
   ```
- **test:login**: Run login-related tests using Cypress.
   ```bash
   npm run test:all:login
   ```
- **test:cart-management**: Run cart management tests using Cypress.
   ```bash
   npm run test:all:cart-management
   ```
- **test:product-filtering**: Run product filtering tests using Cypress.
   ```bash
   npm run test:all:product-filtering
   ```
- **test:order-checkout**: Run order checkout tests using Cypress.
   ```bash
   npm run test:all:order-checkout
   ```
- **report:open**: Open the generated Cypress HTML report.
   ```bash
   npm run report:open
   ```

## Steps to Creating the Report

The project includes a GitHub Actions workflow that automatically generates and pushes Cypress HTML reports to the `report-page` branch. The reports are then deployed to GitHub Pages for easy access.