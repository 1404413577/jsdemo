// 状态管理 resolve 成功, reject 失败
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("hai")
        // resolve()
        reject()


    }, 1000)

}).then(() => {
    console.log("成功")

}, () => {
    console.log("失败")

})

