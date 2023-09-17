const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Middleware
app.use(bodyParser.json());

app.listen(2000, () => {
  console.log("Server has started using nodemon");
});
