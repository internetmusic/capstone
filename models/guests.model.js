const sql = require("./db.js");

// constructor
const Guests = function(guests) {
  this.guestid = guests.guestid;
  this.name = guests.name;
  this.message = guests.message;
  this.time = guests.time;
  this.email = guests.email;
};


Guests.create = (newGuests, result) => {

  sql.query(`INSERT INTO guestbook.guests (guestid, name, message, time, email) VALUE (?,?,?,?,?)`, [newGuests.guestid, newGuests.name, newGuests.message,newGuests.time, newGuests.email], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Guests: ", { id: res.insertId, ...newGuests });
    result(null, { id: res.insertId, ...newGuests });
  });
};


Guests.findById = (GuestsId, result) => {
  sql.query(`SELECT * FROM guestbook.guests WHERE id = ${GuestsId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Guests: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Guests with the id
    result({ kind: "not_found" }, null);
  });
};

Guests.getAll = result => {
  sql.query("SELECT * FROM guestbook.guests", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Guestss: ", res);
    result(null, res);
  });
};


Guests.updateById = (id, Guests, result) => {
  sql.query(
    "UPDATE guestbook.guests SET id = ?, name = ?, message = ?, time = ?, email = ? WHERE id = ?",
    [Guests.guestid, Guests.name, Guests.message, Guests.time, Guests.email],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Guests with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Guests: ", { id: id, ...Guests });
      result(null, { id: id, ...Guests });
    }
  );
};


module.exports = Guests;