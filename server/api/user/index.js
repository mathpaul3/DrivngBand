const { Router } = require("express");
const router = Router();
const ctrl = require("./user.ctrl");

router.get("/signup", ctrl.showSignupPage);
router.get("/login", ctrl.showLoginPage);
router.get("logout", ctrl.logout);

router.post("/signup", ctrl.signup);
router.post("/login", ctrl.login);

module.exports = router;
