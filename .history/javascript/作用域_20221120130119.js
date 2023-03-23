// function Fn(a,b){
//     c = a+b
//     console.log(c) 
// }
// Fn(7,8)

// function demo(name, age){
//     this.name = name;
//     this.age = age;

// }

// let p1 = new demo("hai",22);
// console.log(p1)

// 局部作用域
// 函数内部定义的变量 只能在函数里面使用

let myname = "hai"
function test(){
    var nickname = "hai"
    console.log("test")
    console.log(nickname)
}
// console.log(nickname)
test()