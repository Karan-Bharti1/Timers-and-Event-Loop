// setTimeout
// function sayHello(){
//     console.log("Hello, world")
// }
// let timeOutId=setTimeout(sayHello,5000)
// clearTimeout(timeOutId)
// setInterval runs a piece of code at a specified interval repeatedly

//  Clear Timers to stop or clear this setInterval
// let timerId=setInterval(sayHello,2000)
// setTimeout(()=>{
// clearInterval(timerId) //clear Interval web Api
// console.log("Time Stopped")
// },8000)

//closures
function outerFunction(){
    let outerVariable="Red"
    function innerFunction(){
        console.log(outerVariable)//The mechanism with which inner function is able to access the variables of outer environment is lexical scope
    }
    return innerFunction
}
outerFunction()()
