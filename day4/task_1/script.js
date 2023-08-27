const url='https://jsonplaceholder.typicode.com/users';
const userUrl="https://jsonplaceholder.typicode.com/posts?userId=";
const UsersContainer=document.getElementById("users");
const titlesContainer=document.getElementById("titles");
function createUserCard(){
    const userCard=document.createElement("p");
    userCard.classList.add("user");
    return userCard;
}
function createTitleCard(){
    const titleCard=document.createElement("p");
    titleCard.classList.add("title");
    return titleCard;
}
async function getUsers(){
    let response=await fetch(url);
    let data=await response.json();
    return data;
}
async function getTitles(id){
    const response=await fetch(userUrl+id);
    let data=await response.json();
    return data;
}
function displayTitles(id){
    const frag=document.createDocumentFragment();
    const titlesData=getTitles(id);
    titlesData.then((titles)=>{
        titlesContainer.innerHTML="";
        for(let i of titles){
            const titleCard=createTitleCard()
            titleCard.innerHTML=i.title;
            frag.appendChild(titleCard);
        }
        titlesContainer.appendChild(frag);
    }).catch((msg)=>{
        alert(msg);
    })
}
function displayUsers(){
    const frag=document.createDocumentFragment();
    const usersData=getUsers();
    usersData.then((users)=>{
        console.log(users);
        for(let i of users){
            const userCard=createUserCard();
            userCard.innerHTML=i.name;
            userCard.addEventListener("click",()=>{
                displayTitles(i.id);
            })
            frag.appendChild(userCard);
        }
        UsersContainer.appendChild(frag);
    }).catch((msg)=>{
        alert(msg);
    })
}
displayUsers();
