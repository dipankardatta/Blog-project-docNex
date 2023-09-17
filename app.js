const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const dotenv = require("dotenv").config();
const User = require("./model/userModel");
const BlogPost = require("./model/blogModel");

const app = express();

//Middleware
app.use(bodyParser.json());

User.hasMany(BlogPost);
BlogPost.belongsTo(User);

sequelize
  .sync({ force: true })
  //   .sync()
  .then((res) => {
    app.listen(2000);
  })
  .catch((e) => console.log(e));
