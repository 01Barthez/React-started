# React Started Project

Welcome to React-started, a React project template designed to speed up the start-up of your web applications. This template features a robust initial configuration, modern development tools and a well-organized folder structure for easy project development and maintenance.

## Table of contents

- [React Started Project](#react-started-project)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Project Structure](#project-structure)
  - [Requirements](#requirements)
    - [1 - Tools](#1---tools)
    - [2 - Environment Variables](#2---environment-variables)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Deployment with Docker](#deployment-with-docker)
  - [Documentation](#documentation)
    - [1- Scripts available](#1--scripts-available)
      - [- Development](#--development)
      - [- Build](#--build)
      - [- Testing](#--testing)
      - [- Linting and Formatting](#--linting-and-formatting)
      - [- Documentation](#--documentation)
      - [- Release Management](#--release-management)
      - [- Utilities](#--utilities)
      - [- CI/CD](#--cicd)
      - [- Git Hooks](#--git-hooks)
    - [1- Custom Hooks available](#1--custom-hooks-available)
  - [Contributing](#contributing)
  - [License](#license)
  - [Authors](#authors)

## Overview

React Starter Project is a comprehensive boilerplate crafted to accelerate the development of modern React applications. It seamlessly integrates TypeScript for robust typing, Vite for blazing-fast builds, TailwindCSS for utility-first styling, and Zustand for lightweight state management. With preconfigured tools like ESLint and Prettier for code quality and formatting, this starter kit empowers developers to focus on building scalable, maintainable, and performant web applications without worrying about setup complexities.

## Features

- **TypeScript**: Ensures type safety, improves code quality through static type checking, and reduces runtime errors.
- **Vite**: A fast and efficient build tool that offers hot module replacement (HMR) for a seamless development experience.
- **TailwindCSS**: A utility-first CSS framework for rapid and responsive UI development with a focus on customization.
- **Zustand**: A lightweight and scalable state management solution that integrates seamlessly with React.
- **React Router**: Declarative routing for building single-page applications with ease.
- **Custom Hooks**: Reusable hooks for data fetching, theme management, and toast notifications to enhance productivity.
- **SEO Optimization**: Built-in support for SEO using the `react-helmet-async` library.
- **ESLint & Prettier**: Ensures clean and consistent code with automatic linting and formatting.
- **Docker**: Includes configurations for containerizing the application, making it portable and scalable.
- **Nginx**: Provides production-ready configurations for deploying the application with Nginx.

## Technologies

This project utilizes the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Vite**: A modern frontend build tool.
- **TailwindCSS**: A utility-first CSS framework.
- **Zustand**: A small, fast state management library.
- **Axios**: A promise-based HTTP client for making requests.
- **React Router**: A library for routing in React applications.
- **react-helmet-async**: A library for managing changes to the document head.

## Project Structure

The project is organized into a clear and logical directory structure, facilitating easy navigation and maintenance:

```php
React-started/
├── .github/                # Configurations GitHub (workflows, actions)
├── .husky/                 # Hooks Git
├── nginx-config/           # Configurations Nginx pour la production
├── public/                 # Fichiers statiques publics
├── src/                    # Code source de l'application
│   ├── assets/             # Ressources (images, styles, etc.)
│   ├── components/         # Composants React réutilisables
│   ├── pages/              # Pages de l'application
│   ├── App.tsx             # Composant principal de l'application
│   └── main.tsx            # Point d'entrée de l'application
├── .dockerignore           # Fichiers à ignorer par Docker
├── .env.example            # Exemple de fichier d'environnement
├── .eslintrc.js            # Configuration ESLint
├── .gitignore              # Fichiers à ignorer par Git
├── .prettierrc             # Configuration Prettier
├── docker-compose.yml      # Configuration Docker Compose
├── Dockerfile              # Dockerfile pour la création de l'image
├── package.json            # Dépendances et scripts npm
├── tailwind.config.js      # Configuration Tailwind CSS
├── tsconfig.json           # Configuration TypeScript
└── vite.config.ts          # Configuration Vite
```

## Requirements

Before you start, make sure you have the following items installed on your machine:

### 1 - Tools

- **Node.js**: Javascript runtine (`>=v20.18.`)
- **Yarn**: Package management (`>=1.22.22`)
- **npm**: Package management (`>=10.8.2`)
- **Docker**: For containerization (optional)

### 2 - Environment Variables

To run this project, you need to configure all the environment variables listed in the [.env.example](./.env.example) file.  
Make sure to copy and rename the `.env.example` file to `.env`, then update the values as required for your setup.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/01Barthez/React-started.git
   cd react-started
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Start the development server**:

   ```bash
   yarn dev
   ```

## Usage

Once the development server is running, you can access the application at **<http://localhost:4000>**. You can navigate through the different routes defined in the [`router.tsx`](./src/routes/router.tsx) file.

### Deployment with Docker

To deploy the application using Docker, follow these steps:

1. **Building the Docker image**:

   ```bash
   yarn docker:build
   ```

2. **Run the container**:

   ```bash
   yarn docker:start

   ```

The application will be available at **<http://localhost:4001>.**

## Documentation

### 1- Scripts available

Here is a list of important scripts available in this project and their purposes:

#### - Development

- **`dev`**: Starts the development server using Vite.
- **`start`**: Previews the production build locally.
- **`docker:start`**: Previews the container app.

#### - Build

- **`build`**: Cleans the `dist` folder and builds the application for production.
- **`build:test`**: Builds the application in production mode, outputting to a temporary directory.
- **`docker:build"`**: Builds the container application.

#### - Testing

- **`test`**: Runs all unit tests once using Vitest.
- **`test:watch`**: Runs tests in watch mode for continuous feedback.
- **`test:coverage`**: Generates a code coverage report for the tests.
- **`test:preview`**: Serves the coverage report locally on port `4003`.
- **`test:clean`**: Cleans the coverage directory.

#### - Linting and Formatting

- **`lint`**: Lints the codebase with ESLint and fixes issues automatically.
- **`format`**: Formats the codebase with Prettier.

#### - Documentation

- **`docs`**: Generates project documentation using TypeDoc.
- **`docs:preview`**: Serves the generated documentation locally on port `4002`.
- **`docs:clean`**: Cleans the documentation directory.

#### - Release Management

- **`release`**: Creates a patch release with `standard-version`.
- **`release:minor`**: Creates a minor release.
- **`release:major`**: Creates a major release.

#### - Utilities

- **`clean`**: Removes the `dist` folder.
- **`reinstall`**: Cleans dependencies, cache, and reinstalls packages.
- **`upgrade`**: Opens an interactive upgrade interface for dependencies.

#### - CI/CD

- **`ci`**: Runs linting, tests, and builds the project in sequence.

#### - Git Hooks

- **`prepare`**: Installs Husky for managing Git hooks.
- **`prepare:pre-commit`**: Sets up a pre-commit hook to run linting before commits.

This list covers the key scripts to help you understand and use them effectively in your workflow.

### 1- Custom Hooks available

- **`useFetch`**: A custom hook for fetching data from APIs.
- **`useToast`**: A custom hook for managing toast notifications.
- **`useTheme`**: A custom hook for managing theme preferences.

## Contributing

Contributions are always welcome!

See [`contributing`](./contributing.md) for ways to get started.

Please adhere to this project's [`Code of Conduct`](./CODE_OF_CONDUCT.md).

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)

## Authors

- [@01Barthez](https://github.com/01Barthez)
