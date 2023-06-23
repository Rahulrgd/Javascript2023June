const navItems = document.getElementsByTagName("a");
// console.log(navItem);

// for(let i=0; i<navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroudColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// forEach method does not work with HTMLCollection
// navItems.forEach((navItem)=>{
//     navItem.style.backgroudColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

for(let navItem of navItems){
    navItem.style.backgroudColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}