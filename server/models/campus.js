const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Campus = sequelize.define("campus", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,  // string = varcar(255)
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING, // string = varcar(255)
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(1234), // string(1234) = varcar(1234)
    allowNull: false,
  }
});

module.exports = Customer;