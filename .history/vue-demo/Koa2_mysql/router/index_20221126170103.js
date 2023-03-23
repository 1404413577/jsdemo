const Router = require('koa-router');
const router = new Router();
const home = require("./home")
const list = require("./list")
const login = require("./login")
const book = require("./book")

router.use("/home", home.routes(), home.allowedMethods());
router.use("/list", list.routes(), list.allowedMethods());
router.use("/login", login.routes(), login.allowedMethods());
router.use("/book", login.routes(), book.allowedMethods());

router.redirect('/','/home');

module.exports = router;