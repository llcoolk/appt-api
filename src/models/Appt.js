const Sequelize = require('sequelize');
const sequelize = require('./index');

const Appts = sequelize.define(
  "appt", {
    apptDate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    employeeId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    timeStamps: false
  });

Appts.belongsTo(Customers);
Customers.hasMany(Appts);

module.exports = Appts;