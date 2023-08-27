const textField=document.getElementById("textField");
        let timer;
        function startAlert(){
            textField.innerHTML="Alert will start after 5 seconds , click cancel button to cancel";
            startTimer();
        }
        function startTimer(){
            timer=setTimeout(()=>alert("alert fired after 5 seconds"),5000);
        }
        function cancelTimer(){
            clearTimeout(timer);
            textField.innerHTML="Alert canceled";
        }