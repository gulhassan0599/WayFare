const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User.js");
const wrapAsync = require("../utils/wrapAsync.js");
const userController = require("../controllers/user.js");
const { userValidation, redirectUrl } = require("../middlewares/index.js");

//======= SIGNUP ======
router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(userValidation, wrapAsync(userController.userSignup));

//======= LOGIN ======
router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    redirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/users/login",
      failureFlash: true,
    }),
    userController.userLogin,
  );

//======= LOGOUT ======
router.get("/logout", userController.userLogout);

module.exports = router;
