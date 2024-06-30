# Sesame HR challenge

This project is a solution to the Sesame HR challenge. It is a simple web application that allows users to manage vacancies and candidates.

### 1 - Create .env.local file

Create a `.env.local` file in the root of the project with the following content (You can use the `.env.example` file as a template):

```sh
VITE_APP_SESAME_API_URL=
VITE_APP_SESAME_API_KEY=
VITE_APP_SESAME_VACANCY_ID=
```

### 2 - Project Setup with Docker

```sh
docker build -t sesame-challenge-frontend .
```

### 3 - Compile and Hot-Reload for Development

```sh
docker compose up -d # or docker compose up if you want to see the logs
```

### 4 - Accessing the application

The application will be available at [http://localhost:5173/](http://localhost:5173/)

---

### Run Unit Tests with [Vitest](https://vitest.dev/)

To run the unit tests, you can use the following command in local (After executing the `npm install` command):

```sh
npm run test:unit
```

Or you can run the tests in the Docker container:

```sh
docker exec -t <containerID> npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
