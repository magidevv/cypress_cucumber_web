# Project Repository Summary

This ReadMe provides detailed information about the project repository, including its summary, requirements, installation steps, launch instructions, and generating reports.

# Project ReadMe

This ReadMe provides comprehensive information about the project repository, including its summary, requirements, installation steps, launching instructions, and progress on steps to create a report.

## Summary of Repository

The project repository is organized into the following directories and files:

- `.github`: GitHub-related files, potentially containing workflows and actions.
- `cypress`:
  - `e2e (features)`: Cucumber feature files specifying scenarios.
  - `fixtures`: Test data and fixtures for Cypress tests.
  - `helper`: Custom Cypress helper functions.
  - `pages`: Cypress page objects.
  - `support (step_definitions)`: Step definitions for Cucumber scenarios.
- `.env.example`: Example environment variables configuration.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `package-lock.json`: Lock file for Node.js dependencies.
- `package.json`: Node.js package configuration for the project.
- `cypress.config.js`: Configuration file for Cypress.

## Requirements

Ensure your system meets the following requirements to run the project successfully:

- **Operating System**: Windows 10 and above (64-bit only).
- **Node.js**: Version 18.x and Node.js 20.x and above.
- **Local Development**:
  - Capable machine for modern web development.
- **CI Environment**:
  - Minimum 2 CPUs for Cypress.
  - Additional CPU if video recording is enabled.
  - Extra CPU per external process (frontend/backend app servers, databases, infrastructure).
  - Minimum 4GB of memory; use 8GB+ for longer test runs.

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

- **test:all:headed**: Run all Cypress tests in headed (GUI) mode.
   ```bash
   npm run test:all:headed
   ```

- **test:login**: Run login-related tests using Cypress.
   ```bash
   npm run test:login
   ```

- **test:cart-management**: Run cart management tests using Cypress.
   ```bash
   npm run test:cart-management
   ```

- **test:product-filtering**: Run product filtering tests using Cypress.
   ```bash
   npm run test:product-filtering
   ```

- **test:order-checkout**: Run order checkout tests using Cypress.
   ```bash
   npm run test:order-checkout
   ```

## Steps to Creating the Report (In Progress)

Work on this section is in progress and will be updated soon. Please check back for more information on generating reports.