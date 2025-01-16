# Use the official Node.js image as a base
FROM node:18-alpine

# Set environment variables
ENV NODE_ENV=production

# Set the working directory
WORKDIR /backend/src/server

# Copy only the package files to leverage Docker's layer caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Add a health check (optional, for Docker Compose)
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost:3000/health || exit 1

# Command to run the application
CMD ["npm", "start"]
