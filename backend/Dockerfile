# First we install all the required dependencies 
FROM node:14 as backend-builder

WORKDIR /app

COPY /package.json ./
RUN npm install
COPY . .

# let us now get final image
FROM node:14-alpine

WORKDIR /app 

COPY --from=backend-builder /app .

EXPOSE 3000

CMD ["npm","start"]

