function Fn(a,b){
    c = a+b
    console.log(c) 
}
Fn(7,8)

function demo(name, age){
    this.name = name;
    this.age = age;

}

let p1 = new demo("hai",22);
console.log(p1)

// 函数内部定义的变量 之孽那个