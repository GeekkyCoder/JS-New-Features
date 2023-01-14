
//Note:  Job Queue has the higher priroty compared to Callback queues 

// Callback Queue - Task Queue 
setTimeout(()=> {
    console.log("time out 1")
}, 500)

setTimeout(()=> {
    console.log("time out 2")
}, 700)

// Job Queue - Microtask queues
Promise.resolve("hi").then(data => console.log(`resloved: ${data}`))

console.log("in the last")