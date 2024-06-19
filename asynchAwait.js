async function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("data fetched")
        },1000) 
     })
}


async function main(){
    try{
        const message=await fetchData();
        console.log(message);
    }
    catch(error){
        console.error(error);
    }
}

main()