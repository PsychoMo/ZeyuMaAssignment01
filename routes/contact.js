let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// create a reference to the database schema
let contact = require("../models/contact");

/** Get contact list page - read operation */
router.get("/", (req, res, next) => {
  contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(contactList);

      /** res.render('contacts/index', {
            title: 'Contact List',
            contactList: contactList
       });*/
    }
  });
});

module.exports = router;
