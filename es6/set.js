// let s1 = new Set([1,2,3,4,5])
// // set的一些操作做的方法
// s1.add(6).add("hai").delete(1)
// console.log(s1)
// // 输出是否含有这个值
// console.log(s1.has("hai"))

// s1.forEach(item=>console.log(item))

// for (let item of s1.keys()){
//     console.log(item)

// }

// // set的应用场景 去重
// let arr = [1,2,3,4,5,6,7,8]
// let s = new Set(arr)

// // 合并去重
// let arr1 = [1,2,3,4,5]
// let arr2 = [2,3,4,5,1]
// // 两数组合并 扩展运算符
// let s2 = new Set([...arr2, ...arr1])
// // 变数组的方法 
// console.log(s2)
// console.log([...s2])
// console.log(Array.from(s2))

// // console.log() 

// // 总有一天你会出现在我身边

// // 交集
// let demo1 = new Set(arr1)
// let demo2 = new Set(arr2)
// let res = new Set(arr1.filter(item => s2.has(item)))
// console.log(res)

// // 实现两个数组的差集
// let arr3 = new Set(arr1.filter(item=>s2.has(item)))
// let arr4 = new Set(arr2.filter(item=>s1.has(item)))
// console.log(arr3)
// console.log(arr4)
// console.log([...arr3, ...arr4])












