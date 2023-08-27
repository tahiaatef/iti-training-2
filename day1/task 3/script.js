const names=document.getElementById("name");
const age=document.getElementById("age");
function setData(){
    localStorage.setItem("name",names.value);
    localStorage.setItem("age",age.value);
}
function getData(){
    names.value=localStorage.getItem("name");
    age.value=localStorage.getItem("age");
}
function removeData(){
    localStorage.clear();
}