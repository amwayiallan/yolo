# Build the client application
FROM node:18 as frontend-builder

WORKDIR /app

COPY client/package.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Serve the client application using nginx
FROM nginx:alpine

COPY --from=frontend-builder /app/build /usr/share/nginx/html

EXPOSE 80