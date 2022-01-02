# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:lts

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# expose 3000
ENV HOST "0.0.0.0"
ENV PORT 3000
EXPOSE 3000

CMD ["node", "dist/index"]
