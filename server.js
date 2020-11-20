// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Routes
// =============================================================

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() { app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
})});