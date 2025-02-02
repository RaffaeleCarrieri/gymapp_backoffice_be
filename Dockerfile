# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm config set legacy-peer-deps true
RUN npm install

# Bundle app source
COPY . .


# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 8080:8080

# Start the server using the production build
CMD ["node", "./dist/main.js"]