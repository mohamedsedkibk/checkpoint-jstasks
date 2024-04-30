const awaitCall=async()=>{
    try{
    const data=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    // .then(Response=>Response.json())
    // .then(response=> console.log(response))
    
    const resultat=await data.json()
    console.log(resultat)
}
catch (error){
    console.log(error)
}
}
awaitCall()
