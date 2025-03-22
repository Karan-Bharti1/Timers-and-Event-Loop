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
//  let orderFood=new Promise((resolve,reject)=>{
//     let foodDelivered=true
//     if (foodDelivered){
//         resolve("Food Arrival Successfully")
//     }else{
//         reject("Sorry,food was not Delivered")
//     }
// })

// //handle Promises
// orderFood.then(message=>console.log(message)).catch(error=>console.log(error))

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res=>res.json())//data being fetched is converted to json() format
// .then(data=>{
//     console.log(data)//res.json()  again returned a promise so we use .then again and now we can use this data
// })
// .catch(error=>console.log(error))

//Practice Questions Promises
const fetchData=new Promise((resolve,reject)=>{
    let dataRecieved=true
    if(dataRecieved){
        resolve("Data Fetched Successfully")
    }else{
        reject("Failed to fetch data")
    }
})
fetchData.then(message=>console.log(message)).catch(error=>console.log(error))

const checkNum=new Promise((resolve,reject)=>{
    let num=8
    if(num>10){
        resolve("Number is valid")
    }else {
        reject("Number is too small")
    }
})
checkNum.then(message=>console.log(message)).catch(error=>console.log(error))

const loggerPromise=new Promise((resolve,reject)=>{
    const isLoggedIn=true
    if(isLoggedIn){
        resolve("User is Logged In")
    }else{
        reject("User is not logged in")
    }
})
loggerPromise.then(message=>console.log(message)).catch(error=>console.log(error))

const fetchUser=new Promise((resolve,reject)=>{
    const userExists=true
    if(userExists){
        resolve({name:"Alice",age:25})
    }else{
        reject("User Not Found")
    }
})
fetchUser.then(message=>console.log(message)).catch(error=>console.log(error))

const fetchNum=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(42)
    },2000)
})
fetchNum.then(message=>console.log(message)).catch(error=>console.log(error))

const numFetch=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(500)
    },3000)

})
numFetch.then(message=>console.log(message)).catch(error=>console.log(error))

function checkPassword(password){
    return new Promise((resolve,reject)=>{
        if(password==="12345"){
            resolve("Password Accepted")
        }else{
            reject ("Invalid Password")
        }
    })
}
checkPassword("12345").then(message=>console.log(message)).catch(error=>console.log(error))


function checkEmail(email){
    return new Promise((resolve,reject)=>{
        if(email.includes("@")){
            resolve("Valid Email")
        }else{
            reject("Invalid Email")
        }
    })
}
checkEmail("karan@example.in").then(message=>console.log(message)).catch(error=>console.log(error))

function checkTemp(temp){
    return new Promise((resolve,reject)=>{
        if(temp>15){
            resolve("Temperature is 20°C")
        }else{
            reject("Temperature too low")
        }
    })
}
checkTemp(20).then(message=>console.log(message)).catch(error=>console.log(error))