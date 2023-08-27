const firstPara=document.getElementById("first");
const secondPara=document.getElementById("second");
let counter=0;
let sessionCounter;
if(sessionStorage.getItem("counter")){
    sessionCounter=sessionStorage.getItem("counter");
}else{
    sessionCounter=0;
    sessionStorage.setItem("counter",sessionCounter);
}
function count(){
    counter++;
    firstPara.innerHTML=`the counter is ${counter}`;
    sessionCounter++;
    secondPara.innerHTML=`the counter is ${sessionCounter}`;
    sessionStorage.setItem("counter",sessionCounter);
}