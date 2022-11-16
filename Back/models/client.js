const mongoose = require("mongoose");

const ClientModel = mongoose.Schema(
  {
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    delivery_address: {
        type: String,
    },
    billing_address: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    postal_code: {
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

module.exports = mongoose.model("Client", ClientModel);
