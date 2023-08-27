function displayLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
        document.getElementById("location").innerHTML=`the position : ${position.coords.longitude} , ${position.coords.latitude}`;
    });
    }else{
        alert("your browser does not support geolocation");
    }
    
}