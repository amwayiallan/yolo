# install dependencies
FROM node:18 as backend-builder
WORKDIR /app
COPY backend/package.json ./
RUN npm install
COPY backend/ .
RUN npm run build

# final image
FROM node:18-alpine
WORKDIR /app
COPY --from=backend-builder /app .
EXPOSE 3000
CMD ["npm","start"]





