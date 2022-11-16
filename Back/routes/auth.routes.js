const controller = require("../controllers/auth.controller");
const verifySignUp = require("../middlewares/signup");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/signup",
    [verifySignUp.checkDuplicateUsernameOrEmail],
    controller.signup
  );
  app.post("/api/signin-seller", controller.signinSeller);
  app.post("/api/signin-client", controller.signinClient);

  app.get("/api/getuser", controller.get_user);
};
