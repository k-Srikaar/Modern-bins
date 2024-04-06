const express = require("express");
const router = express.Router({ mergeParams: true });
const viewController = require("./../Controllers/viewController");
const authController = require("./../Controllers/authController");
const gsmController = require("./../Controllers/gsmController");

router.route("/").get(authController.isLoggedIn, viewController.overview);
router.route("/login").get(viewController.login);
router.route("/signup").get(viewController.signup);
router.route("/index").get(authController.isLoggedIn, viewController.index);
router
  .route("/binddetails/:name")
  .get(
    authController.isLoggedIn,
    gsmController.getBIN,
    viewController.binstatus
  );
router
  .route("/feedback")
  .get(authController.isLoggedIn, viewController.feedback);
// router.route("/binddetails");
// router.route("/index").get(viewController.getindexpage);

module.exports = router;
