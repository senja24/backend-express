const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/auth");

const registerController = require("../controllers/RegisterController");
const loginController = require("../controllers/LoginController");
const userController = require("../controllers/UserController");

const { validateRegister, validateLogin } = require("../utils/validators/auth");

router.post("/register", validateRegister, registerController.register);
router.post("/login", validateLogin, loginController.login);
router.get("/admin/users", verifyToken, userController.findUsers);

module.exports = router;
