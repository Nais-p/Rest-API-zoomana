const controller = require("../controllers/shop.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/seller-shop/:user_id",
        controller.create_shop
    );
    app.get(
        "/api/get-shop",
        controller.get_shop
    );
    app.get(
        "/api/get-shop/:user_id",
        controller.get_id
    );

    app.delete(
        "/api/delete-shop/:_id",
        controller.delete_account
    );
    app.put(
        "/api/modify-shop/:_id",
        controller.modif_shop
    );

};

