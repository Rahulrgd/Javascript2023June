// function returning promise

function ricePromise(){
    const bucket = ['coffee', 'chips', 'salt', 'vegetables', 'rice'];
    if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject("Couldn't do it");
    }
}

ricePromise().then(
    (myfriedRice)=>{
        console.log("lets eat ", myfriedRice);
    }.catch(
        (error)=>{
            console.log(error);
        }
    )
)