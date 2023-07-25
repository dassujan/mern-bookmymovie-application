// Import the Express.js framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import the database configuration module from ./config/dbConfig.js
const dbConfig = require('./config/dbConfig');


// Set the port to listen on. It will use the value of PORT environment variable if set, otherwise use 5000.
const port = process.env.PORT || 5000;

// Start the Express server and listen on the specified port.
app.listen(port, () => console.log(`Node JS server is running on port ${port}`));