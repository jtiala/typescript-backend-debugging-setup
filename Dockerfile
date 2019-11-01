FROM node:12-alpine

# Copy source
WORKDIR /api
COPY . .

# Install dependencies
RUN npm i

# Expose ports
EXPOSE 8080
EXPOSE 9229
