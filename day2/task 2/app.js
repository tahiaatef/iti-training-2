let counter;
function startScrolling(){
    counter=setInterval(()=>window.scrollBy(0,100),1000);
}
function cancelScrolling(){
    clearInterval(counter);
}