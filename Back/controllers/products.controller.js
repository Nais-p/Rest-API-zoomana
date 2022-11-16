const Product = require("../models/product.js");
const Shop = require("../models/shop.js");

const db = require("../models/user.js");
const User = db;
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
let gfs;

const conn = mongoose.connection;
conn.once("open", function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("user_profil");
});
module.exports = {
  async createproduct(req, res) {
    var id = req.params._id;
    var user_id = req.params.user_id;

    const ByShop = await Shop.findOne({
      user_id: user_id,
      _id: id,
    });
    let {
      name,
      price,
      stock,
      height,
      width,
      depth,
      weight,
      material,
      description,
      additional_information,
      sold_by,
      sent_by,
      delivery_price,
    } = req.body;

    if (ByShop != null) {
      try {
        if (req.file) {
          const imgUrl = `http://localhost:3000/api/file/${req.file.filename}`;

          const product = await Product.create({
            name,
            price,
            stock,
            height,
            width,
            depth,
            weight,
            material,
            description,
            additional_information,
            sold_by,
            sent_by,
            delivery_price,
            picture: imgUrl,
            user_id: req.params.user_id,
            seller_id: ByShop.seller_id,
            shop_id: ByShop._id,
          });
          await product.save();

          res.send(product);
        } else {
          const product = await Product.create({
            name,
            price,
            stock,
            height,
            width,
            depth,
            weight,
            material,
            description,
            additional_information,
            sold_by,
            sent_by,
            delivery_price,
            picture: undefined,
            user_id: user_id,
            seller_id: ByShop.seller_id,
            shop_id: ByShop._id,
          });
          await product.save();

          res.send(product);
        }
      } catch (err) {
        res.send(err);
      }
    } else {
      res.send("product");
    }
  },

  async picture(req, res, next) {
    try {
      const file = await gfs.files.findOne({ filename: req.params.filename });
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    } catch (error) {
      res.send("not found");
    }
  },
  // Afficher tout les produits
  async get_product(req, res) {
    try {
      const shops = await Product.find();
      res.send(shops);
    } catch (err) {
      res.send(err);
    }
  },

  // Afficher les infos du produits associé a un id
  async get_id(req, res) {
    const GetById = await Product.find({ _id: req.params._id });

    if (GetById != null) {
      try {
        res.status(200).send(GetById);
      } catch {
        res.status(404);
        res.send({ error: "Product doesn't exist!" });
      }
    } else {
      res.status(404);
      res.send({ error: "Product doesn't exist!" });
    }
  },

  // Supprimer un produit via son id
  async delete_product(req, res) {
    var _id = req.params._id;
    const GetById = await Product.findByIdAndDelete({ _id });
    if (GetById != null) {
      try {
        res.status(200).send({ message: "Delete successful!" });
      } catch {
        res.status(404);
        res.send({ error: "Product doesn't exist!" });
      }
    } else {
      res.status(404);
      res.send({ error: "We can't delete Product" });
    }
  },

  // Récupérer tous les produits d'une boutique
  async get_shop_product(req, res) {
    const GetById = await Product.find({ shop_id: req.params._id });

    if (GetById != null) {
      try {
        res.status(200).send(GetById);
      } catch {
        res.status(404);
        res.send({ error: "Product doesn't exist!" });
      }
    } else {
      res.status(404);
      res.send({ error: "Product doesn't exist!" });
    }
  },

  // Modification des infos associé a un produit via son id
  async modif_product(req, res) {
    const UpdateById = await Product.findOne({ _id: req.params._id });
    if (UpdateById != null) {
      try {
        if (UpdateById != null) {
          if (req.body.price) {
            UpdateById.price = req.body.price;
          }

          if (req.body.name) {
            UpdateById.name = req.body.name;
          }

          if (req.body.stock) {
            UpdateById.stock = req.body.stock;
          }

          if (req.body.height) {
            UpdateById.height = req.body.height;
          }

          if (req.body.width) {
            UpdateById.width = req.body.width;
          }

          if (req.body.depth) {
            UpdateById.depth = req.body.depth;
          }
          if (req.body.weight) {
            UpdateById.weight = req.body.weight;
          }
          if (req.body.material) {
            UpdateById.material = req.body.material;
          }
          if (req.body.description) {
            UpdateById.description = req.body.description;
          }
          if (req.body.additional_information) {
            UpdateById.additional_information = req.body.additional_information;
          }
          if (req.body.sold_by) {
            UpdateById.sold_by = req.body.sold_by;
          }
          if (req.body.sent_by) {
            UpdateById.sent_by = req.body.sent_by;
          }
          if (req.body.delivery_price) {
            UpdateById.delivery_price = req.body.delivery_price;
          }
          // if (req.body.picture) {
          //   UpdateById.picture = req.body.picture;
          // }
          await UpdateById.save();
          res.send(UpdateById);
        }
      } catch {
        res.status(404);
        res.send({ error: "Product doesn't exist!" });
      }
    } else {
      res.send({ error: "Product doesn't exist!" });
    }
  },
};
