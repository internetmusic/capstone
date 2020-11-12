const Guest = require("../models/guests.model.js");

// Create and Save a new Guest
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Guest
  const guest = new Guest({
    guestid:req.body.guestid, 
    name:req.body.name,
    message:req.body.message,
    time:req.body.time,
    email: req.body.email
  });

  // Save Guest in the database
  Guest.create(guest, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Guest."
      });
    else res.send(data);
  });
};

// Retrieve all Guests from the database.
exports.findAll = (req, res) => {
  Guest.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Guests."
      });
    else res.send(data);
  });
};


