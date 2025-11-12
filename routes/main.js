// ================================
// EXPRESS ROUTER SETUP
// ================================

// Import the Express framework
const express = require("express");
const router = express.Router();

// ================================
// DATA DEFINITION
// This object stores the shop's main data and is passed to EJS templates.
// ================================
const shopData = {
  shopName: "Quench",
  productCategories: [
    "Water",
    "Fresh Juice",
    "Mojitos",
    "Hot Drinks",
    "Iced Drinks",
  ],
};

// ================================
// ROUTE HANDLERS
// Define all page routes and their responses.
// ================================

// ---------- HOME PAGE ----------
// Renders index.ejs and passes shop data (shop name + product categories)
router.get("/", (req, res) => {
  res.render("index.ejs", shopData);
});

// ---------- ABOUT PAGE ----------
// Renders about.ejs, which shows business info and franchise form
router.get("/about", (req, res) => {
  res.render("about.ejs", shopData);
});

// ---------- SEARCH PAGE ----------
// Displays a search form for products
router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

// ---------- SEARCH RESULT ----------
// Handles GET requests from the search form submission
// (In the future, you could replace this with a database query)
router.get("/search_result", (req, res) => {
  res.send(
    "You searched for " +
      req.query.search_text +
      " in category: " +
      req.query.category
  );
});

// ---------- REGISTER PAGE ----------
// Displays the registration form
router.get("/register", (req, res) => {
  res.render("register.ejs", shopData);
});

// ---------- REGISTER FORM SUBMISSION ----------
// Handles POST request from the registration form
// Responds with a confirmation message
router.post("/registered", (req, res) => {
  res.send(
    "Hello " +
      req.body.firstName +
      " " +
      req.body.lastName +
      "! You are now registered. A confirmation email will be sent to " +
      req.body.email +
      "."
  );
});

// ---------- FRANCHISE CONTACT ----------
// Displays the same about page containing the franchise form
router.get("/franchise", (req, res) => {
  res.render("about.ejs", shopData);
});

// ---------- FRANCHISE FORM SUBMISSION ----------
// Handles POST request from the franchise contact form
router.post("/franchise", (req, res) => {
  res.send(
    "Thank you for your interest in becoming a franchise! We will contact you soon at " +
      req.body.email +
      "."
  );
});

// ---------- SURVEY PAGE ----------
// Displays the customer survey form
router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData);
});

// ================================
// EXPORT ROUTER
// Makes this router available to index.js (main server file)
// ================================
module.exports = router;