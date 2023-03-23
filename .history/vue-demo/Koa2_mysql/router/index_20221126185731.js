const Router = require('koa-router');
const router = new Router();
const home = require("./home")
const list = require("./list")
const login = require("./login")
const book = require("./book")
const book1 = require("./book1")

router.use("/home", home.routes(), home.allowedMethods());
router.use("/list", list.routes(), list.allowedMethods());
router.use("/login", login.routes(), login.allowedMethods());
router.use("/book", book.routes(), book.allowedMethods());
router.use("/book1", book1.routes(), book1.allowedMethods());



router.redirect('/','/home');

module.exports = router;