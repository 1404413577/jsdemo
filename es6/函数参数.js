// function foo(a,b){
//     c = a + b;
//     console.log(c)
// }

// foo()

// function ajax(url,{
//     body='',
//     method='GET',
//     headers={},
// } ={}){
//     console.log(method)
// }

// ajax("http://www.imooc.com",{
//     method:"POST"
// })


// 会形成作用域
// function fool(y=x){
//     let x = 2
//     console.log(y)

// }
// fool()

// es6 扩展运算符 合并数组

// function foo(a,b,c){
//     console.log(a,b,c)

// }
// let arr = [1,2,3]
// foo(...arr)

// // let arr1 = [1,2,3]
// // let arr2 = [4,5,6]

// let arr1 = ["hai"]
// let arr2 = ["lang","asd"]

// arr1.push(...arr2)
// console.log(arr1)

// function foo(x, y, z) {
//     let sum = 0;
//     // es5 prototype原型链
//     // Array.prototype.forEach.call(arguments, function (item) {
//     //     sum += item
//     // })
//     // es6 伪数组转化为真正的数组
//     Array.from(arguments).forEach(function(item){
//         sum += item

//     })
//     return sum
// }




// console.log(foo(1, 2))
// console.log(foo(1, 2, 3))

// 对于不确定的参数运算符
// function foo(...args) {
//     console.log(args)
//     sum = 0;
//     args.forEach((item)=>{
//         sum += item
//     })
//     return sum;
// }


// console.log(foo(1,2,3,4)) 


// 箭头函数
// 例子 普通函数 求和
function sum(x, y) {
    return z = x + y
}

console.log(sum(5, 7))


// 箭头函数 求和

let sum1 = (a, b, c) => {
    if (a > b) {
        if (a > c) {
            return a

        } else {
            return c
        }
    } else {
        if (a > b) {
            return a

        } else {
            return b
        }

    }



}

console.log(sum1(8, 9, 6))
