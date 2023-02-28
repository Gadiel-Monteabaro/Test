const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {

  var today = new Date();
  console.log(today);

});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});


console.log(Date());