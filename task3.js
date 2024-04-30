// const awaitCall=async()=>{
//     try{
//     const fgh=await fetch("https://www.borsqdd.com/api/activity")
//     const ghj= await fgh.json()
//     console.log(ghj)
// }
// catch (error) {console.log("something wrong",error)}
// }
// awaitCall()
const funct1=async()=>{
    try{
console.log("first function")
    }
    catch (error){console.log("something wrong",error)}
}
const funct2=async()=>{
    try{
        console.log("second function")
    }
    catch (error){
        console.log("something wrong",error)
    }
}
const funct3=async()=>{
    try{
        console.log("third function")
    }
    catch (error){console.log("something wrong",error)

    }
}
const delay=(ms)=>{
    return new Promise(resolve=>setTimeout(resolve,ms))
        
    }

const chainedAsyncFunctions=async()=>{
    try{
        await delay(1000)
        await funct1()
        await delay(1000)
        await funct2()
        await delay(1000)
       await funct3()
        
    }
    catch (error){console.log("something wrong",error)

    }
}
chainedAsyncFunctions()
console.log("hi")