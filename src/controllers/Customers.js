const Customer = require('../models/Customer');

const getAll = (req, res) => {
  Customer.findAll({}).then(cust => res.json(cust));
}

const getOne = (req, res) => {
  Customer.findOne({
    where: {
      id: req.params.id
    }
  }).then(cust =>
    res.json(cust));
}

const create = (req, res) => {

  const newCust = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone
  };

  Customer.create(newCust)
    .then(cust => res.json(cust))
    .catch(err =>
      res.json({
        Error: err
      })
    );
}

const update = (req, res) => {
  const {
    appDate,
    employeeId
  } = req.body;

  const updatedAppt = {};
  if (appDate) {
    updatedAppt.appDate = appDate;
  }
  if (employeeId) {
    updatedAppt.employeeId = employeeId;
  }

  Appt.update(updatedAppt, {
      where: {
        id: req.params.id
      }
    })
    .then(newApp => res.json(newapp))
    .catch(err =>
      res.json({
        Error: err
      })
    );
}

const remove = (req, res) => {
  Appt.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(deleteAppt => res.json(deleteAppt))
    .catch(err =>
      res.json({
        Error: err
      })
    );
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
}