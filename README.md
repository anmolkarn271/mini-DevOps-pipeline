# Mini DevOps CI/CD Pipeline

A Node.js application demonstrating DevOps practices through automated testing, Docker containerization, and a GitHub Actions CI/CD pipeline.

## Project Overview

This project demonstrates how to build, test, containerize, and publish a Node.js application using an automated CI/CD workflow.

The pipeline runs application tests, builds a Docker image, verifies the container's health endpoint, and publishes the image to Docker Hub when the required checks pass.

## Architecture

```text
Developer
   |
   v
GitHub Repository
   |
   v
GitHub Actions
   |
   v
Install Dependencies
   |
   v
Run Automated Tests
   |
   v
Build Docker Image
   |
   v
Container Smoke Test
   |
   v
Publish Image to Docker Hub
```

## Tech Stack

* Node.js
* Express.js
* Jest
* Supertest
* Docker
* Git and GitHub
* GitHub Actions
* Docker Hub
* YAML

## Features

* REST API health endpoint
* Automated application tests
* Docker-based application packaging
* Automated CI pipeline
* Container startup and health verification
* Automated Docker image publishing
* GitHub Secrets for registry authentication
* Git commit-based Docker image tags

## Application Endpoints

| Endpoint      | Description               |
| ------------- | ------------------------- |
| `/`           | Application home page     |
| `/api/health` | Application health status |

Example health response:

```json
{
  "status": "healthy",
  "application": "mini-devops-pipeline"
}
```

## Run Locally

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd mini_DevOps
```

Replace `<YOUR_GITHUB_REPOSITORY_URL>` with your actual GitHub repository URL.

### 2. Install dependencies

```bash
npm ci
```

### 3. Run automated tests

```bash
npm test
```

### 4. Start the application

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Run with Docker

### Build the image

```bash
docker build -t mini-devops-pipeline:local .
```

### Start the container

```bash
docker run -d \
  --name mini-devops-app \
  -p 3000:3000 \
  mini-devops-pipeline:local
```

### Test the health endpoint

```bash
curl http://localhost:3000/api/health
```

### View container logs

```bash
docker logs mini-devops-app
```

### Stop and remove the container

```bash
docker rm -f mini-devops-app
```

## CI/CD Workflow

The GitHub Actions workflow is defined in `.github/workflows/ci.yml`.

It performs the following steps:

1. Checks out the source code.
2. Configures Node.js.
3. Installs dependencies using `npm ci`.
4. Runs automated tests.
5. Builds the Docker image.
6. Starts the container and verifies its health endpoint.
7. Publishes the Docker image to Docker Hub after successful checks.

The workflow runs for pushes to `main`, pull requests targeting `main`, version-tag pushes, and manual execution, subject to the configured publishing conditions.

## Docker Hub

Docker images are published to Docker Hub using GitHub Actions.

**Docker Hub Repository:**
`https://hub.docker.com/r/YOUR_DOCKERHUB_USERNAME/mini-devops-pipeline`

Replace `YOUR_DOCKERHUB_USERNAME` with your actual Docker Hub username.

Pull the image:

```bash
docker pull YOUR_DOCKERHUB_USERNAME/mini-devops-pipeline:latest
```

Run the published image:

```bash
docker run -d \
  --name mini-devops-app \
  -p 3000:3000 \
  YOUR_DOCKERHUB_USERNAME/mini-devops-pipeline:latest
```

Use the actual tag available in Docker Hub if `latest` is not present.

## GitHub Secrets

The workflow uses repository secrets for Docker Hub authentication:

* `DOCKERHUB_USERNAME`
* `DOCKERHUB_TOKEN`

Sensitive credentials are not stored directly in the workflow file.

## Project Structure

```text
mini_DevOps/
├── .github/
│   └── workflows/
│       └── ci.yml
├── tests/
│   └── app.test.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## Learning Outcomes

* Understanding CI/CD fundamentals
* Writing automated tests
* Containerizing a Node.js application
* Managing Docker images and containers
* Automating workflows with GitHub Actions
* Using GitHub Secrets
* Publishing Docker images to a registry

## Future Improvements

* Container vulnerability scanning
* Multi-stage Docker builds
* AWS deployment
* Infrastructure as Code
* Monitoring and logging

## Author

**Anmol Karn**

DevOps learning project focused on automation, containerization, and CI/CD.
