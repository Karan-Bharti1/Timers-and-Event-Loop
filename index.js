//setTimeout
function sayHello(){
    console.log("Hello, world")
}
// setTimeout(sayHello,5000)

//setInterval runs a piece of code at a specified interval repeatedly

//Clear Timers to stop or clear this setInterval
let timerId=setInterval(sayHello,2000)
setTimeout(()=>{
clearInterval(timerId) //clear Interval web Api
console.log("Time Stopped")
},8000)