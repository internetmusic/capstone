module.exports = app => {
    const guest = require("../controllers/guest.controller.js");
  
    // Create a new record
    app.post("/create", guest.create);
  
    // Retrieve all Guests
    app.get("/guests", guest.findAll);
   };