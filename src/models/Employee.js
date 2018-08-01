const Sequelize = require('sequelize');
const sequelize = require('./index');

const Employee = sequelize.define("employee", {
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

Appt.belongsTo(Employee)
Employee.hasMany(Appt);

Employee.sync({
  force: true
}).then(() => {
  return Employee.create({
    firstName: 'Leen',
    lastName: 'Kim',
    phone: '7145551212'
  });
});

module.exports = Employee;