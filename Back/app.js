const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const uri = "mongodb://localhost/fdi";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require("./routes/auth.routes")(app);
require("./routes/shop.route")(app);

require("./routes/client.route")(app);
require("./routes/seller.route")(app);
require("./routes/products.route")(app);

app.get("/", (req, res) => {
  res.json({ message: "etechtalents API" });
});

module.exports = app;
