// es5的类和继承

// function People(name,age) {
//     console.log(this)
//     this.name = name
//     this.age = age
//     People.count++
// }

// People.prototype.showName = function(){
//     console.log('我的名字是：'+this.name)
// }


// // 静态属性
// People.count = 0

// People.getCount = function(){
//     console.log('当前共有'+People.count + '个人')
// }


// let p1 = new People('hai',22)
// p1.showName()
// console.log(p1)

// let p2 = new People('lang',22)
// console.log(p2)
// p2.showName()
// People.getCount()


function Animal(name){
    this.name = name

}
Animal.prototype.showName = function(){
    console.log("名字是:"+this.name)
}

Cat.prototype = new Animal()
Cat.prototype.constuctor = Cat

function Cat(name,color){
    // 继承属性
    Animal.call(this,name)
    this.color = color

}

let d1 = new Cat("fugui","white")
d1.showName()
console.log(d1)
