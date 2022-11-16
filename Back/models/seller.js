const mongoose = require("mongoose");

const SellerModel = mongoose.Schema(
  {
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    type_seller: {
        type: String,
    },
    number_phone: {
        type: String,
    },
    user_id: {
        type: String,
    },
   
  }
);

module.exports = mongoose.model("Seller", SellerModel);
