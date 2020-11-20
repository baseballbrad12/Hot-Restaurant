var tableData = require('../info/tables');
var waitingList = require('../info/waitinglist');


// Displays all characters
app.get("/api/tables", function(req, res) {
    return res.json(tableData);
  });
  
  // Displays a single character, or returns false
  app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;
  
  
    console.log(chosen);