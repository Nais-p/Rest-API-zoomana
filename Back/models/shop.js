const mongoose = require("mongoose");

const ShopModel = mongoose.Schema({
  localization: 
    {
      address: String,
      city: String,
      postal_code: String,
      country: String,
    },
  
  seller_id: {
    type: String,
  },
  user_id: {
    type: String,
  },

  shop_name: {
    type: String,
  },
});

module.exports = mongoose.model("Shop", ShopModel);
