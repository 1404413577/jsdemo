const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // vue.config.js
  devServer: {
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true, // 允许websockets跨域
        ws: true,
        pathRewrite: {
          "^/api": "http://localhost:5050",
        },
      },
    }, 
  },
});
