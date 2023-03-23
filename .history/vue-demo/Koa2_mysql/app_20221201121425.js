const Koa = require('koa2');
const {body} = require("koa2/lib/response");
const router = require('./router/index')
const cors = require('koa2-cors')

// 引入
const path = require('path')
const static = require('koa-static')
const app = new Koa();
const port = 5050;


router.get('/', async (ctx) => {
    ctx.body = "首页";
})

router.get('/list', async (ctx) => {
    ctx.body = "列表页";
})

// 匹配不到页面的全部跳转去404
app.use(async (ctx, next) => {
    await next();
    if (parseInt(ctx.status) === 404) {
        ctx.response.redirect("/404")
    }
})
//统异常处理
const errorHandler = require('./utils/errorHandler.js');

// 获取静态资源文件夹
app.use(static(path.join(__dirname + '/assets')));
//跨域
// app.use(cors())


app.use(
    cors({
        origin: function (ctx) { //设置允许来自指定域名请求
            // if (ctx.url === '/test') {
            //     return '*'; // 允许来自所有域名请求
            // }
            return ctx.header.origin; //只允许http://localhost:8080这个域名的请求
        },
        maxAge: 5, //指定本次预检请求的有效期，单位为秒。
        credentials: true, //是否允许发送Cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
);


app.use(router.routes(), router.allowedMethods());
errorHandler(app);


app.listen(port, () => {
    console.log('服务开启: http://localhost:' + port);
})

