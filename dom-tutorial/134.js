// promises

const bucket = ['coffee', 'chips', 'salt', 'vegetables', 'rice'];

const friedRicePromise = new Promise((resolve, reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject("Couldn't do it");
    }
})

// how to consume
friedRicePromise.then(
    (myfriedRice)=>{
        console.log("lets eat", myfriedRice);
    },
    (error)=>{console.log(error);}
)