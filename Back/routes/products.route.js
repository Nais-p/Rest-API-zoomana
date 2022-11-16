const controller = require("../controllers/products.controller.js");
const upload = require("../controllers/files/upload.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
      "multipart/form-data"
    );
    next();
  });

  app.post(
    "/api/new-product/:_id/:user_id",
    upload.single("filee"),
    controller.createproduct
  );
  app.get("/api/file/:filename", controller.picture);

  app.get("/api/all-product", controller.get_product);
  app.get("/api/all-product-shop/:_id", controller.get_id);
  app.delete("/api/delete-product/:_id", controller.delete_product);
  app.put("/api/modify-product/:_id", controller.modif_product);
  app.get("/api/product-from-shop/:_id", controller.get_shop_product);
};
