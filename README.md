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


