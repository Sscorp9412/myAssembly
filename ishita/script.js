document.addEventListener('DOMContentLoaded',()=>{

    document.querySelectorAll(".reply").forEach(function(element){
        element.onclick=()=>{
            document.querySelector("#header").style.display="none";
            if(element.dataset.reply=="Yes")
            {
                document.querySelector(".header-replybox").style.display="block";
                document.querySelector(".balloons").style.display="block";
                document.querySelector(".header-replybox").innerHTML="Happy Belated Birthday";
            }
            else
            {
                document.querySelector(".header-replybox").style.display="block";
                document.querySelector(".header-replybox").innerHTML="Sorry, I got the Wrong call<br>Bye.";
            }
        }
    })
});