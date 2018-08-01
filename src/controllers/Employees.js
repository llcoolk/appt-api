const Employee = require('../models/Employee');

const getAll = (req, res) => {
  Employee.findAll({}).then(emp => res.json(emp));
}

const getOne = (req, res) => {
  Employee.findOne({
    where: {
      id: req.params.id
    }
  }).then(emp =>
    res.json(emp));
}

const create = (req, res) => {

  const newEmp = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone
  };

  Employee.create(newEmp)
    .then(emp => res.json(emp))
    .catch(err =>
      res.json({
        Error: err
      })
    );
}

const update = (req, res) => {
  const newEmp = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone
  };

  const updatedAppt = {};
  if (firstName) {
    updatedAppt.firstName = firstName;
  }
  if (lastName) {
    updatedAppt.lastName = lastName;
  }
  if (phone) {
    updatedAppt.phone = phone;
  }


  Employee.update(updatedEmp, {
      where: {
        id: req.params.id
      }
    })
    .then(newEmp => res.json(newEmp))
    .catch(err =>
      res.json({
        Error: err
      })
    );
}

const remove = (req, res) => {
  Employee.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(deleteEmp => res.json(deleteEmp))
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