
process 
const path = process.argv[0]
const value = process.argv[2]

console.log(path)

if(value==="Faraz"){
    console.log(`${value} is a nice person`)
}else {
    console.log(`something fishy about him`)
}

let interval 
let num = 0

interval = setInterval(()=> {
    console.log(`i ran ${num} times`)
   num++
  if(num == 5){
    clearInterval(interval)
    console.log("stopped")
  }
},1000)


setTimeout(()=> {
 console.log("hey iam time out")
},1000)

