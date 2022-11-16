const mongoose = require("mongoose");

const UserModel = mongoose.Schema(
  {
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
    },  
}
);

module.exports = mongoose.model("User", UserModel);
