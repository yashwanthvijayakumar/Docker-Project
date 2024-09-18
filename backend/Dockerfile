# Use Node.js as the base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all other files
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]
