# Use a base image with Node.js and npm
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code into the container
COPY . .

# Build the React application
RUN npm run build

# Expose the port the application will run on
EXPOSE 3000

# Set the default command to start the application
CMD ["npm", "start"]
