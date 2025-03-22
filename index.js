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
// function outerFunction(){
//     let outerVariable="Red"
//     function innerFunction(){
//         console.log(outerVariable)//The mechanism with which inner function is able to access the variables of outer environment is lexical scope
//     }
//     return innerFunction
// }
// let closFunc=outerFunction()//Here the execution of outerFunction is stopped , it only returns ineer func
// closFunc()// But still we can access the variables of outerFunc and this is closure

// function counter(){
//     let count=0
//     function innerCount(){
//        count++;
//        console.log(count) 
//     }
//     return innerCount
// }

// let myCounter=counter()
// myCounter()
// myCounter()//Able to remember the values of outer function from previous execution as well i.e. the count in previous execution 1

//creating promises
 let orderFood=new Promise((resolve,reject)=>{
    let foodDelivered=true
    if (foodDelivered){
        resolve("Food Arrival Successfully")
    }else{
        reject("Sorry,food was not Delivered")
    }
})

//handle Promises
orderFood.then(message=>console.log(message)).catch(eror=>console.log(error))