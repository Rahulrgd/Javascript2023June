function fun(){
    let count = 0;
    return function(){
        if(count < 1){
            console.log("Hi, You called me!!");
            count++;
        }else{
            console.log("Mai already ek baar call ho chuka hoon!");
        }
    }
}

const ans = fun();
ans();
ans();

