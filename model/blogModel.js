const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const blog = sequelize.define("blog", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
