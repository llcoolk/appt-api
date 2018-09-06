const Sequelize = require("sequelize");
const sequelize = require("./index");

const Appt = sequelize.define("appt", {
  apptDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  employeeId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  timeStamps: false
});

Appt.belongsToMany(Customers);
Customers.belongsToMany(Appt);
Appt.belongsToMany(Employees);
Employees.belongsToMany(Appt);

// Appt.sync({
//   force: true
// }).then(() => {
//   return Appt.create({
//     appDate: 'Aug 01, 2018',
//     employeeId: 1,
//   });
// });

module.exports = Appt;
