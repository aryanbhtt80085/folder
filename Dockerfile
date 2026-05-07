FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Environment variables (can be overridden in Jenkins/Docker run)
ENV PORT=3000
ENV NODE_ENV=production

# Expose app port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
