//promises
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data fetched");
        },5000)
    })
}

fetchData().then((message)=>{
    console.log(message);
})