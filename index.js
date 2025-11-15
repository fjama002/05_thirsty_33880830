// ================================
// SERVER SETUP
// ================================

// Import required modules
// - express: main web framework
// - ejs: templating engine for rendering HTML views
// - path: built-in Node.js module for handling file paths
const express = require("express");
const ejs = require("ejs");
const path = require("path");

// ================================
// CREATE EXPRESS APPLICATION
// ================================

// Initialize the Express app
const app = express();

// Define the port number where the app will listen
const port = 8000;

// ================================
// VIEW ENGINE CONFIGURATION
// ================================

// Set EJS as the templating engine
// This tells Express to use `.ejs` files for dynamic HTML rendering
app.set("view engine", "ejs");

// ================================
// MIDDLEWARE SETUP
// ================================

// Body parser middleware
// Allows Express to read form data sent via POST requests (req.body)
app.use(express.urlencoded({ extended: true }));

// Serve static files (like CSS, images, JS) from the "public" directory
// Example: "/style.css" will load from "public/style.css"
app.use(express.static(path.join(__dirname, "public")));

// ================================
// ROUTES
// ================================

// Import route definitions from routes/main.js
const mainRoutes = require("./routes/main");

// Register the routes with Express
// All routes defined in main.js are mounted at the root URL ("/")
app.use("/", mainRoutes);

// ================================
// START THE SERVER
// ================================

// Launch the application and listen for incoming requests
app.listen(port, () => console.log(`✅ Server running here: ${port}`));