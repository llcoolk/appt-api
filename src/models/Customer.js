const Sequelize = require('sequelize');
const sequelize = require('./index');

const Customer = sequelize.define("customer", {
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

Customer.sync({
  force: true
}).then(() => {
  return Customer.create({
    firstName: 'Justin',
    lastName: 'Kim',
    phone: '7145551212'
  });
});

module.exports = Customer;