const Sequelize = require('sequelize');
const sequelize = require('./index');

const Employees = sequelize.define("employees", {
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

Employees.hasMany(Appts);

module.exports = Customers;