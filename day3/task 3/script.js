let fruits=["apple","strawberry","banana","orange","mango"];

console.log(`is string : ${fruits.every(isAllString)}`);

console.log(`is some element start with a : ${fruits.some(startWithA)}`);

let newFruits=fruits.filter((e)=>{
    if((e[0]==='s' || e[0]==='S')||(e[0]==='b' || e[0]==='B'))
        return true;
    else
        return false;
});

console.log(newFruits);

let myArr=fruits.map((e)=>{
    return `i like ${e}`;
})

myArr.forEach(e=>console.log(e));

function isAllString(e){
    if (typeof e == "string")
    return true;
    else
    return false;
}
function startWithA(e){
    if (e[0]==='a' || e[0]==='A')
        return true;
    else 
        return false;
}