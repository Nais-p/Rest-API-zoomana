const db = require("../models/client");
const Client = db;
checkDuplicateUserId = (req, res, next) => {
  // Username
  Client.findOne({
    user_id: req.params._id,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! User is already in use!" });
      return;
    }
  });
};

const verifyUserId = {
  checkDuplicateUserId,
};

module.exports = verifyUserId;
