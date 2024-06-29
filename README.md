# Sesame HR challenge

This project is a solution to the Sesame HR challenge. It is a simple web application that allows users to manage vacancies and candidates.

### 1- Create .env.local file

Create a `.env.local` file in the root of the project with the following content (You can use the `.env.example` file as a template):

```sh
VITE_APP_SESAME_API_URL=
VITE_APP_SESAME_API_KEY=
VITE_APP_SESAME_VACANCY_ID=
```

### 1- Project Setup with Docker

```sh
docker build -t sesame-challenge-frontend .
```

### 2- Compile and Hot-Reload for Development

```sh
docker compose up -d # or docker compose up if you want to see the logs
```

### 3- Accessing the application

The application will be available at [http://localhost:5173/](http://localhost:5173/)

---

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
