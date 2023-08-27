let winObj;
function openWindow(){
    winObj=window.open('',"_black","width=100px,height=200px,left=500,top=200");
}
function closeWindow(){
    winObj.close();
}
function changeColor(color){
    if(winObj){
        winObj.document.write("this is new window");
        winObj.document.body.style.backgroundColor=color;
        winObj.focus();
    }else{
        alert("there is no window");
    }
}
function isClosed(){
    if(winObj){
        alert(winObj.closed);
    }else{
        alert("true");
    }
}
function displaySelected(){
    alert(getSelection());
}