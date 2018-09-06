const Appt = require("../models/Appt");

const getAll = (req, res) => {
  Appt.findAll({}).then(appts => res.json(appts));
};

const getOne = (req, res) => {
  Appt.findOne({
    where: {
      id: req.params.id
    }
  }).then(appts => res.json(appts));
};

const create = (req, res) => {
  const newAppt = {
    appDate: req.body.appDate,
    employeeId: req.body.employeeId
  };

  Appt.create(newAppt)
    .then(newappt => res.json(newappt))
    .catch(err =>
      res.json({
        Error: err
      })
    );
};

const update = (req, res) => {
  const { appDate, employeeId } = req.body;

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
};

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
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
};
