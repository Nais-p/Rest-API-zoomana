const controller = require("../controllers/seller.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/seller-account/:_id",
        controller.create_account
    );
    app.get(
        "/api/get-seller",
        controller.get_account
    );
    app.get(
        "/api/get-seller/:user_id",
        controller.get_id
    );
    app.delete(
        "/api/delete-seller/:user_id",
        controller.delete_account
    );
    app.put(
        "/api/modify-seller/:user_id",
        controller.modif_seller
    );
};

