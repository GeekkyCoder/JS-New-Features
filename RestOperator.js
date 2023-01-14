// ...
// Rest Operator is used in function paramters and an array of finite array element 

const arr = [1,2,3,4,5,6]

const sum = (...rest) => {
   const [one,two,three,...all] = rest
   return one + two + three
}

console.log(sum(...arr))