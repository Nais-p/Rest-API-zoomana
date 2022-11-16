const db = require("../models/seller");
const Seller = db;

module.exports = {
  // Creation d'un compte seller
  async create_account(req, res) {
    var user_id = req.params._id;
    const GetById = await Seller.findOne({ user_id });
    if (GetById == null) {
      const seller = new Seller({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        type_seller: req.body.type_seller,
        user_id: req.params._id,
      });

      seller.save((err, seller) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.send({
          message: "Seller was registered successfully!",
          seller: seller,
        });
      });
    } else {
      res.status(404);
      res.send({ error: "Seller already exist!" });
    }
  },

  // Afficher tout les comptes sellers
  async get_account(req, res) {
    try {
      const seller = await Seller.find();
      res.send(seller);
    } catch (err) {
      res.send(err);
    }
  },

  // Afficher les infos du compte avec l'id en parametres
  async get_id(req, res) {
    const GetById = await Seller.findOne({ user_id: req.params.user_id });
    if (GetById != null) {
      try {
        res.status(200).send(GetById);
      } catch {
        res.status(404);
        res.send({ error: "Seller doesn't exist!" });
      }
    } else {
      res.status(404);
      res.send({ error: "Client doesn't exist!" });
    }
  },

  // Supprimer compte associé a l'id
  async delete_account(req, res) {
    const GetById = await Seller.deleteOne({ user_id: req.params.user_id });
    if (GetById != null) {
      try {
        res.status(200).send({ message: "Delete successful!" });
      } catch {
        res.status(404);
        res.send({ error: "Seller doesn't exist!" });
      }
    } else {
      res.status(404);
      res.send({ error: "We can't delete account" });
    }
  },

  // Modifier compte associé a l'id
  async modif_seller(req, res) {
    const UpdateById = await Seller.findOne({ user_id: req.params.user_id });
    if (UpdateById != null) {
      try {
        if (UpdateById != null) {
          if (req.body.firstname) {
            UpdateById.firstname = req.body.firstname;
          }

          if (req.body.lastname) {
            UpdateById.lastname = req.body.lastname;
          }

          if (req.body.type_seller) {
            UpdateById.type_seller = req.body.type_seller;
          }
          await UpdateById.save();
          res.send(UpdateById);
        }
      } catch {
        res.status(404);
        res.send({ error: "Seller doesn't exist!" });
      }
    } else {
      res.send({ error: "L'utilisateur n'existe pas" });
    }
  },
};
