const User = require("../models/User.js");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.userSignup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "User registered successfully");
      res.redirect("/listings");
    });

    console.log("User registered successfully");
  } catch (err) {
    if (err.code === 11000) {
      req.flash("error", "Email already registered");
    } else {
      req.flash("error", err.message);
    }
    res.redirect("/users/signup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.userLogin = async (req, res) => {
  req.flash("success", "Welcome back to WayFare");
  const redirectUrl = res.locals.savedUrl || "/listings";
  res.redirect(redirectUrl);

  console.log("User login successfully");
};

module.exports.userLogout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You logout successfully");
    res.redirect("/listings");

    console.log("User logout successfully");
  });
};
