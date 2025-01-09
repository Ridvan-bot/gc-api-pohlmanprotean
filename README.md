# API Pohlman Protean hosted in Google Cloud 

![Build Status](https://github.com/Ridvan-bot/pohlmanprotean.se/actions/workflows/deploy.yml/badge.svg)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/Ridvan-bot/gc-api-pohlmanprotean?label=version&sort=semver)
![Last Commit](https://img.shields.io/github/last-commit/Ridvan-bot/gc-api-pohlmanprotean)
![GitHub issues](https://img.shields.io/github/issues/Ridvan-bot/gc-api-pohlmanprotean)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Ridvan-bot/gc-api-pohlmanprotean)

An API in Google Cloud Run using Cloud FireStore.

## Project Structure

- **src/**: Contains the source code of the application.
- **dist/**: Contains the compiled JavaScript code.
- **types/**: Contains TypeScript type definitions.

## Scripts

- `build`: Compiles the TypeScript code.
- `start`: Compiles the TypeScript code and starts the application.
- `test`: Runs the tests using Jest.
- `dev`: Compiles the TypeScript code and starts the application in development mode using nodemon.

## Dependencies

- **express**: Web framework for Node.js.
- **cors**: Middleware for enabling CORS.
- **dotenv**: Loads environment variables from a .env file.
- **jsonwebtoken**: Library for working with JSON Web Tokens.
- **bcrypt**: Library for hashing passwords.
- **ioredis**: Redis client for Node.js.

## Dev Dependencies

- **typescript**: TypeScript language.
- **jest**: Testing framework.
- **ts-jest**: Jest transformer for TypeScript.
- **nodemon**: Utility that monitors for changes in source code and automatically restarts the server.
- **semantic-release**: Automates the versioning and package publishing process.

## Configuration

- **tsconfig.json**: TypeScript configuration file.
- **nodemon.json**: Configuration file for nodemon.
- **jest.config.js**: Configuration file for Jest.
- **Dockerfile**: Docker configuration file for building the application image.

## GitHub Actions Workflows

- **validate.yml**: Validates code quality.
- **release.yml**: Triggers semantic release.
- **deploy.yml**: Builds and deploys the application to Google Cloud Run.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Build the project using `npm run build`.
4. Start the application using `npm run start`.

##
Crafted with care by **Robin Pohlman** at **Pohlman Protean AB**.
