// 状态管理 resolve 成功, reject 失败
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("hai")
        resolve()


    }, 1000)

}).then((res) => {
    console.log(res + "成功")

}, (res) => {
    console.log(res + "失败")

})

