const Sequelize = require('sequelize');
const sequelize = require('./index');

const Customers = sequelize.define("customers", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 100],
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 100],
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 15],
    }
  }
}, {
  timeStamps: false
});

module.exports = Customers;