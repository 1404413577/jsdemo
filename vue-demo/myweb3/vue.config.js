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
    // host: "127.0.0.1",
    // port: 5050, // 端口号
    // https: false, // https:{type:Boolean}
    // open: false, //配置自动启动浏览器
    // // 配置跨域处理,只有一个代理
    // // proxy: 'http://localhost:5050',
    

    // 配置多个代理
    proxy: {
      "/apis": {
        // 这里apis不固定，可以起其它名
        target: "http://localhost:5050", // 要访问的接口域名
        changeOrigin: true,                    // 是否跨域
        pathRewrite: {                         // 重写路径
            '^/api': '' 
            // '^/api': '/api' ---> localhost:8080/api/auth/ 通过代理服务器访问 localhost:8081/api/auth/
            // '^/api': ''     ---> localhost:8080/api/auth/ 通过代理服务器访问 localhost:8081/auth/
        }
      }
    },
  },
});
