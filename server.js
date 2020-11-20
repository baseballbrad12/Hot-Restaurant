// Dependencies
// =============================================================
var express = require("express");
var path = require("path")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function(req, res) {
 res.sendFile(path.join(__dirname, "./index.html"));
});
// Routes
// =============================================================
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() { 
  console.log("APP IS RUNNING ON PORT" + PORT)
})