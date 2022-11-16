const db = require("../models/client");
const Client = db;

const User = require("../models/user");

const express = require("express");
const router = express.Router();

module.exports = {
  // Creation d'un compte client
  async create_account(req, res) {
    var user_id = req.params._id;

    const GetById = await Client.findOne({ user_id });
    if (GetById == null) {
      const client = new Client({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        delivery_address: req.body.delivery_address,
        billing_address: req.body.billing_address,
        city: req.body.city,
        country: req.body.country,
        postal_code: req.body.postal_code,
        number_phone: req.body.number_phone,
        user_id: req.params._id,
      });

      client.save((err, client) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.send({
          message: "Client was registered successfully!",
          client: client,
        });
      });
    } else {
      res.status(404);
      res.send({ error: "Client already exist!" });
    }
  },

  // Afficher tout les comptes clients
  async get_account(req, res) {
    try {
      const client = await Client.find();
      res.send(client);
    } catch (err) {
      res.send(err);
    }
  },

  // Afficher les infos de l'id en parametres
  async get_id(req, res) {
    const GetById = await Client.findOne({ user_id: req.params.user_id });

    if (GetById != null) {
      try {
        res.send(GetById);
      } catch {
        next(err);
      }
    } else {
      res.status(404);
      res.send({ error: "Client doesn't exist!" });
    }
  },

  // Supprimer compte associé a l'id
  async delete_account(req, res) {
    const GetById = await Client.deleteOne({ user_id: req.params.user_id });
    if (GetById != null) {
      try {
        res.status(200).send({ message: "Delete successful!" });
      } catch {
        next(err);
      }
    } else {
      res.status(404);
      res.send({ error: "We can't delete account" });
    }
  },

  // Modifier compte associé a l'id
  async modif_client(req, res, next) {
    const UpdateById = await Client.findOne({ user_id: req.params.user_id });
    if (UpdateById != null) {
      try {
        if (req.body.firstname) {
          UpdateById.firstname = req.body.firstname;
        }

        if (req.body.lastname) {
          UpdateById.lastname = req.body.lastname;
        }

        if (req.body.delivery_address) {
          UpdateById.delivery_address = req.body.delivery_address;
        }

        if (req.body.billing_address) {
          UpdateById.billing_address = req.body.billing_address;
        }

        if (req.body.city) {
          UpdateById.city = req.body.city;
        }

        if (req.body.country) {
          UpdateById.country = req.body.country;
        }

        if (req.body.postal_code) {
          UpdateById.postal_code = req.body.postal_code;
        }

        if (req.body.number_phone) {
          UpdateById.number_phone = req.body.number_phone;
        }
        await UpdateById.save();
        res.send(UpdateById);
      } catch (err) {
        next(err);
      }
    } else {
      res.send({ error: "L'utilisateur n'existe pas" });
    }
  },
};
