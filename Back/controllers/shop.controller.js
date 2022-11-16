const Seller = require("../models/seller");
const Shop = require("../models/shop");
const Pro = require("../models/product");

module.exports = {
  // Créer un shop associé au user_id d'un seller
  async create_shop(req, res, next) {
    const BySeller = await Seller.findOne({ user_id: req.params.user_id });
    if (BySeller != null) {
      try {
        var shop_name = req.body.shop_name;
        var localization = {
          city: req.body.localization.city,
          address: req.body.localization.address,
          postal_code: req.body.localization.postal_code,
          country: req.body.localization.country,
        };
        var user_id = req.params.user_id;
        var seller_id = BySeller._id;
        const transfer = await Shop.create({
          user_id,
          seller_id,
          localization,
          shop_name,
        });

        await transfer.save();

        res.send(transfer);
      } catch (err) {
        res.send(err);
      }
    } else {
      res.status(500).send({ error: "L'utilisateur n'existe pas" });
    }
  },

  // Afficher tout les shops
  async get_shop(req, res) {
    try {
      const shops = await Shop.find();
      res.send(shops);
    } catch (err) {
      res.send(err);
    }
  },

  // Afficher les infos du ou des shop(s) associé a un seller
  async get_id(req, res) {
    const GetById = await Shop.find({ user_id: req.params.user_id });
    if (GetById != null) {
      try {
        res.status(200).send(GetById);
      } catch {
        res.status(404);
        res.send({ error: "Shop doesn't exist!" });
      }
    } else {
      res.status(404);
      res.send({ error: "Shop doesn't exist!" });
    }
  },

  // Supprimer un shop
  async delete_account(req, res) {
    var _id = req.params._id;
    const pro = await Shop.findOneAndDelete({ shop_id: req.params._id });
    const GetById = await Shop.findByIdAndDelete({ _id });
    if (GetById != null ) {
      try {
        pro
        res.status(200).send({ message: "Delete successful!" });
      } catch {
        res.status(404);
        res.send({ error: "Shop doesn't exist!" });
      }
    } else {
      res.status(404);
      res.send({ error: "We can't delete Shop" });
    }
  },

  // Modifier les infos d'un shop
  async modif_shop(req, res) {
    var _id = req.params._id;

    const UpdateById = await Shop.findOne({ _id });
    if (UpdateById != null) {
      try {
        if (UpdateById != null) {
          if (req.body.address) {
            UpdateById.address = req.body.address;
          }

          if (req.body.city) {
            UpdateById.city = req.body.city;
          }

          if (req.body.postal_code) {
            UpdateById.postal_code = req.body.postal_code;
          }

          if (req.body.country) {
            UpdateById.country = req.body.postal_code;
          }

          if (req.body.shop_name) {
            UpdateById.shop_name = req.body.shop_name;
          }
          await UpdateById.save();
          res.send(UpdateById);
        }
      } catch {
        res.status(404);
        res.send({ error: "Shop doesn't exist!" });
      }
    } else {
      res.send({ error: "Shop doesn't exist!" });
    }
  },
};
