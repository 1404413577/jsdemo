// 状态管理
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("hai")


    }, 1000)

}).then((res) => {
    console.log(res+"成功")

}, (res) => {
    console.log(res+"失败")

})

