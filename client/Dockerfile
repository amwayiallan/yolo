# Let us start by building the client application
FROM node:14 as frontend-builder

WORKDIR /app

COPY /package.json ./
RUN npm install
COPY . .

# Serve the client application using nginx
FROM nginx:alpine

COPY --from=frontend-builder /app .

EXPOSE 80