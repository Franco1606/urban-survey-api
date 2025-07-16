# Urban Survey API

This API handles the urban survey application data flows and business logic. It's built with Express, TypeScript, TSyringe for dependency injection, and tsoa for API routing and documentation generation.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Dependency Injection](#dependency-injection)
- [License](#license)

## Features

- **TypeScript-based Express API**: Modern, type-safe API development
- **Automatic API Documentation**: OpenAPI/Swagger documentation generated automatically from code
- **Dependency Injection**: Using TSyringe for clean, testable code
- **Modular Architecture**: Clear separation of concerns with a three-layer architecture

## Architecture

The project follows a modular three-layer architecture:

1. **Controller Layer**: Handles HTTP requests and responses
2. **Service Layer**: Contains business logic
3. **Repository Layer**: Manages data access

Each module is self-contained with its own controller, service, and repository components.

## Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Franco1606/urban-survey-api.git
   cd urban-survey-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build:tsoa
   ```

## Development

To start the development server with hot-reloading:

```bash
npm run dev
```

This will:
1. Generate the tsoa routes and Swagger specification
2. Watch for TypeScript changes and compile them
3. Start the server with nodemon for automatic reloading

The server will be available at http://localhost:3000

## API Documentation

API documentation is automatically generated using tsoa and served using Swagger UI.

When the server is running, you can access the API documentation at:

```
http://localhost:3000/docs
```

The documentation is interactive and allows you to:
- Explore available endpoints
- View request/response schemas
- Test API endpoints directly from the browser

## Project Structure

```
src/
├── build/                  # Generated files (tsoa routes and Swagger spec)
├── modules/                # Feature modules
│   └── boilerplate/        # Example module
│       ├── controller/     # HTTP request handlers
│       ├── service/        # Business logic
│       └── repository/     # Data access
├── utilities/              # Shared utilities
│   └── ioc.ts              # Dependency injection setup
└── server.ts               # Main application entry point
```

## Dependency Injection

The project uses TSyringe for dependency injection:

1. Services and repositories are marked with `@injectable()` decorator
2. Dependencies are injected via constructor parameters with `@inject()` decorator
3. The IOC container is configured in `src/utilities/ioc.ts`
4. tsoa uses the IOC container to resolve controllers when handling requests

## License

UNLICENSED - Proprietary software
