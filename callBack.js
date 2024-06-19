//callback function
function fetchData(callback){
    setTimeout(()=>{
        callback("successfully fetched ")
    },5000)
}

fetchData((message)=>{
    console.log(message);
})