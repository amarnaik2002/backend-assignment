# Use official Node.js LTS image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies first (layer caching)
COPY package*.json ./
RUN npm ci --production

# Copy source
COPY . .

# Expose API port
EXPOSE 3000

# Default command: run API. docker-compose will override for worker service.
CMD ["node", "src/api/index.js"]
