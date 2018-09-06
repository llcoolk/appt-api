const sequelize = require("./models/index");
const express = require("express");

const app = express();
const Customers = require("./routes/customers");
const Employees = require("./routes/employees");
const Appts = require("./routes/appts");

app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use("/appts", Appts);
app.use("/customers", Customers);
app.use("/employees", Employees);

app.listen(6000, () =>
  console.log("Server connected at http://localhost:6000...")
);
