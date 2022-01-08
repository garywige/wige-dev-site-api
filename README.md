# WigeDev Website API

## Summary
 
This project represents the back-end API for the WigeDev Website project hosted [here](https://github.com/garywige/wige-dev-site). It is setup as a monorepo to facilitate testing and the front-end project is set up as a submodule in the **web-app** directory.

## NPM Scripts

- `npm run build`: builds both projects
- `npm run test`: runs unit tests on both projects
- `npm run start`: builds and runs the projects in docker compose (you should have the Docker desktop app installed). The back-end is bound to port 3000 and the front-end uses port 8080
- `npm run start:backend`: builds and runs just the back-end project on port 3000
- `npm run stop`: stops running docker compose sessions
- `npm run clean`: cleans up stopped service containers
- `npm run clean:all`: runs a `docker system prune --volumes` to clean up unused data.
- `npm run webapp:clean`: used to remove the **web-app** submodule in the event of an issue with its status
- `npm run webapp:init`: used to reset reinitialize the **web-app** submodule once it's been cleaned with the previous script

## CI/CD

Similar to the front-end project, this project utilizes CircleCI for CI/CD and the configuration for that can be found in the YAML file in the [.circleci](.circleci) directory. Google Cloud Build will automatically build a new image when code is merged with the main branch.

## Server

The **server** directory contains the Node.js project for the API server. The API is hosted by Express.js and you can find Swagger UI documentation by browsing to the server landing page and clicking the link to the **API Documentation**. The [swagger-config.ts](server/src/swagger-config.ts) can be edited to update the Swagger interface if any changes are made. As of this writing, there is only one route at POST /v1/contactus
