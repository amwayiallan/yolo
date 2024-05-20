# Requirements
Make sure that you have the following installed:
- [node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) 
- npm 
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) and start the mongodb service with `sudo service mongod start`

## Navigate to the Client Folder 
 `cd client`

## Run the folllowing command to install the dependencies 
 `npm install`

## Run the folllowing to start the app
 `npm start`

## Open a new terminal and run the same commands in the backend folder
 `cd ../backend`

 `npm install`

 `npm start`

 ### Go ahead a nd add a product (note that the price field only takes a numeric input)

 # YOLO APP
 This is an ecommerce website that enables buyers to view and buy fashion accessories online.

 ### Choice of Base Image
 1. Frontend Client (React): For the frontend client, we chose the Node.js LTS version as the base image for building the application. We utilized the official Node.js Docker image, which provides a stable environment for running JavaScript applications.

 2. Backend Server (Node.js): Similar to the frontend client, we opted for the Node.js LTS version as the base image for the backend server. We used the official Node.js Docker image to ensure compatibility and stability.

 3. MongoDB Database: Instead of building a custom Docker image for MongoDB, we opted to use the official MongoDB Docker image available on Docker Hub. This image provides a pre-configured MongoDB database server, simplifying the setup process.


We are to run a container that will launch the server to host this website