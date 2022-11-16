const mongoose = require("mongoose");

const ProductModel = mongoose.Schema(
  {
    price: {
      type: String,
    },
    name: {
      type: String,
    },
    stock: {
      type: String,
    },
    delivery_price: {
      type: String,
    },
    height: {
      type: String,
    },
    width: {
      type: String,
    },
    depth: {
      type: String,
    },
    weight: {
      type: String,
    },
    material: {
      type: String,
    },

    description: {
      type: String,
    },
    additional_information: {
      type: String,
    },
    picture: {
      type: String,
    },
    sold_by: {
      type: String,
    },
    sent_by: {
      type: String,
    },
    shop_id: {
      type: String,
    },
    user_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductModel);
