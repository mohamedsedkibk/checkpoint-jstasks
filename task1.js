

// getdata()
const delay=(ms)=>{
     return new Promise(resolve=>setTimeout(resolve,ms))
          
     }

const iterateWithAsyncAwait=async(arr)=>{
     
     for(const value of arr){
          await delay (1000)
         console.log(value)
     }
}
iterateWithAsyncAwait([1,2,3])

const getdata=async