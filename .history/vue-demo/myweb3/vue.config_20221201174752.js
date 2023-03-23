const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave:false,
// })

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // ...其它配置
  devServer: {
    host: "127.0.0.1",
    port: 8087, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    // 配置跨域处理,只有一个代理
    proxy: 'http://localhost:5050',
    

    // 配置多个代理
    // proxy: {
    //   "/apis": {
    //     // 这里apis不固定，可以起其它名
    //     target: "http://192.168.1.156:81", // 要访问的接口域名
    //     ws: false, // 是否启用websockets
    //     changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
    //     pathRewrite: {
    //       "^/apis": "",
    //     },
    //   },
    // },
  },
});
