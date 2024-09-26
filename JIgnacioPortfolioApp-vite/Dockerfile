# Stage 1: Clone the GitHub repository, install dependencies, and build the React app with Vite
FROM node:18-alpine as builder

# Set environment variables for GitHub repository
ARG GIT_REPO=https://github.com/JIgna04Centennial/COMP229JIgnacioPortfolio.git

# Install git to clone the repository
RUN apk add --no-cache git

# Set the working directory inside the container
WORKDIR /app

# Clone the repository (use --depth 1 to avoid fetching full Git history)
RUN git clone --depth 1 $GIT_REPO .

# Install dependencies
RUN npm install

# Build the app for production
RUN npm run build

# Stage 2: Set up Nginx, generate a self-signed SSL certificate, and serve the app over HTTPS
FROM nginx:alpine

# Install OpenSSL for generating self-signed certificates
RUN apk add --no-cache openssl

# Create directories for SSL certificates and Nginx configuration
RUN mkdir -p /etc/nginx/ssl /usr/share/nginx/html

# Generate a self-signed SSL certificate
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/nginx/ssl/nginx-selfsigned.key \
  -out /etc/nginx/ssl/nginx-selfsigned.crt \
  -subj "/C=US/ST=State/L=City/O=Organization/OU=Department/CN=localhost"

# Copy the built app from the previous stage to Nginx's HTML folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Create the Nginx configuration directly in the Dockerfile
RUN echo 'server { \
    listen 443 ssl; \
    server_name localhost; \
    ssl_certificate /etc/nginx/ssl/nginx-selfsigned.crt; \
    ssl_certificate_key /etc/nginx/ssl/nginx-selfsigned.key; \
    ssl_protocols TLSv1.2 TLSv1.3; \
    ssl_ciphers HIGH:!aNULL:!MD5; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/nginx.conf

# Expose only port 443 for HTTPS traffic
EXPOSE 443

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
