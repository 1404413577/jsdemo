module.exports = {
    proxyList:{
      "/nodejs-service":{
        target:"http://localhost:9999",   //目的地的地址，需要有http://
        changeOrigin:true,    //必须，允许跨域
        pathRewrite:{  //重写路径
          //如：
          //不配置，则表示接口路径不变直接转发到指定的  服务http://localhost:9999上
          //  '^/nodejs-service/oldpath':'/nodejs-service/new-path',
          //  '^/nodejs-service':'',
        }
      }
    }
  }