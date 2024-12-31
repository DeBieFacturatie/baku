# Use an official node image as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install structured-clone polyfill
RUN npm install structured-clone

# Copy the rest of the application code
COPY . .

# Add structured-clone polyfill to the build process
RUN echo "import 'structured-clone';" >> src/main.js

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 4173

# Start the application
CMD ["npm", "run", "preview"]
