const controller = require("../controllers/client.controller");
const verifyUserId = require("../middlewares/client");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/client-account/:_id",
    // [verifyUserId.checkDuplicateUserId],
    controller.create_account
  );
  app.get(
    "/api/get-client",
     controller.get_account
     );
  app.get(
    "/api/get-client/:user_id",
    controller.get_id
    );
  app.delete(
    "/api/delete-client/:user_id",
    controller.delete_account
    );
  app.put(
    "/api/modify-client/:user_id",
    controller.modif_client
    );
};
