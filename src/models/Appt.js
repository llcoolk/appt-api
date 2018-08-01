const Sequelize = require('sequelize');
const sequelize = require('./index');

const Appt = sequelize.define(
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

// Appt.sync({
//   force: true
// }).then(() => {
//   return Appt.create({
//     appDate: 'Aug 01, 2018',
//     employeeId: 1,
//   });
// });

module.exports = Appts;