# Sesame HR challenge

This project is a solution to the Sesame HR challenge. It is a simple web application that allows users to manage vacancies and candidates.

## Project Setup with Docker

```sh
docker build -t sesame-challenge-frontend .
```

### Compile and Hot-Reload for Development

```sh
docker compose up -d # or docker compose up if you want to see the logs
```








### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
