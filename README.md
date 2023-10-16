# Ecommerce---testproject
## Tech

-   React
-   Mongo DB
-   Node.js

## Project Structure

-   `/api`
    -   Contains all the necessary operations required to process data from the store and operations to send and receive data from the front end.
-   `/client`
    -   Contains vite-react applications with table pagenation features.

## How to run server

-   Clone repo and cd into api directory.
-   Run npm install
-   Add .env file with this content. MONGO_URL = 'mongodb://0.0.0.0:27017/store'
-   Run npm start to start server.

## How to run client

-   cd into client directory.
-   Run 'yarn'
-   Run 'yarn dev --host'
-   Navigate to http://localhost:5173/.
