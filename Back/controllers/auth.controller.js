const db = require("../models/user.js");
const User = db;

const seller = require("../models/seller");
const Seller = seller;

const client = require("../models/client");
const Client = client;

var bcrypt = require("bcryptjs");

// Inscription en tant que seller ou client
(exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    // Si le role "seller" est précisé il s'agit donc d'un seller de même si client est précisé
    if (req.body.role === "seller" || req.body.role === "client") {
      (user.role = req.body.role),
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({
            message: `${req.body.role} was registered successfully!`,
            user: user,
          });
        });
    } else {
      // Sinon si le champ role n'est pas précisé, il s'agit d'office d'un compte client
      user.role = "client";
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.send({
          message: `The ${user.role} was registered successfully!`,
          user: user,
        });
      });
    }

    // si le compte créee à un role seller on initialise la table seller du user
    if (req.body.role === "seller") {
      const seller = new Seller({
        user_id: user._id,
      });

      seller.save((err, seller) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    } else {
      const client = new Client({
        user_id: user._id,
      });

      client.save((err, client) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    }

    // si le compte créee à un role client on initialise la table client du user
  });
}),
  // Connexion pour les sellers avec la récupération des infos du compte
  (exports.signinSeller = (req, res) => {
    User.findOne({
      username: req.body.username,
      role: "seller",
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "Seller Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      });
    });
  });

// Connexion pour les clients avec la récupération des infos du compte
exports.signinClient = (req, res) => {
  User.findOne({
    username: req.body.username,
    role: "client",
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).send({ message: "Client Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    });
  });
};

// Récupération de tous les users que ce soit les sellers et clients
exports.get_user = async (req, res) => {
  try {
    const client = await User.find();
    res.send(client);
  } catch (err) {
    res.send(err);
  }
};
