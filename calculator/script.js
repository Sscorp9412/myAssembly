
function theme(option){
  const night_button=document.querySelector('.controller_button');
  const night_bar=document.querySelector('.controller_base');
  const night_icon=document.querySelector('#night_mode');
  
  if(option==0)
  {
    night_button.style.transform="translateX(25px)";
    night_button.style.transition="all 0.5s ease-out";
    night_bar.style.background="orangered";
    night_icon.style.color="yellow";
    // INPUT FIELD
    document.querySelector('input').style.background="black";
  document.querySelector('input').style.color="white";
  // BODY
  document.body.style.background="black";
  document.body.style.color="white";
  // td
  document.querySelector('td').style.background="black";
  document.querySelector('td').style.color="white";
  // PAGE
  document.querySelector('.page').style.borderColor="white";

    return 1;
  }
  else 
  {
    night_button.style.transform="translateX(0px)";
    night_bar.style.background="grey";
    night_icon.style.color="black";
    // INPUT FIELD
    document.querySelector('input').style.background="#fff";
   document.querySelector('input').style.color="black";
  //  BODY
  document.body.style.background="none";
  document.body.style.color="black";
  // td
   document.querySelector('td').style.background="white";
   document.querySelector('td').style.color="black";
  // PAGE
  document.querySelector('.page').style.borderColor="grey";
    
  return 0;
  }
}

var mode = 0;
document.addEventListener("DOMContentLoaded", () => {
  var range = 0;

  document.querySelector("h1").ondblclick = () => {
    if (mode == 0) {
      document.querySelector(".title1").innerHTML = "Scorp Inc.";
      document.querySelector(".sub_title").style.fontSize = 0;
      mode = 1;
    } else if (mode == 1) {
      document.querySelector(".title1").innerHTML = "Calculator";
      document.querySelector(".sub_title").style.fontSize = "small";
      mode = 0;
    }
  };



//                                               DARK MODE
  //  ===================================================
  // ===================================================

  if(!localStorage.getItem('mode')){
    localStorage.setItem('mode', 0);
  }
  else{
    console.log(localStorage.getItem('mode'));
  }

  const night_button=document.querySelector('.controller_button');
  const night_bar=document.querySelector('.controller_base');
  const night_icon=document.querySelector('#night_mode');
  var night_mode=localStorage.getItem('mode');
  if (night_mode==1)
  {
    night_button.style.transform="translateX(25px)";
    night_button.style.transition="all 0.5s ease-out";
    night_bar.style.background="orangered";
    night_icon.style.color="yellow";
    // INPUT FIELD
    document.querySelector('input').style.background="black";
  document.querySelector('input').style.color="white";
  // BODY
  document.body.style.background="black";
  document.body.style.color="white";
  // td
  document.querySelector('td').style.background="black";
  document.querySelector('td').style.color="white";
  // PAGE
  document.querySelector('.page').style.borderColor="white";
  }

  

  // FUNCTION
  night_bar.onclick=()=>{

    night_mode=theme(night_mode);

    localStorage.setItem('mode',night_mode);
  }
// ===============================================
// =================DARK MODE====================
  // ==============================================






  document.querySelector("#input").value = "";
  document.querySelectorAll(".numbers").forEach(function (element) {
    element.onclick = () => {
      var value = element.dataset.num;
      var display = "";
      var max_len = 10;

      var input = document.querySelector("#input");

      //   console.log(display);

      if (value == "c" || value == "C") {
        input.value = "";
        input.style.fontSize="2.7rem";
        display = 0;
      } else if (value == "=") {
        if (input.value == "2+2+9412" && mode == 1) {
          var passcode = prompt("help ?\n(Ex: Version Control, latest update)");
          passcode = passcode.toLowerCase();
          if (
            passcode == "version control" 
          ) {
            alert("Version: 1.2 beta \nLanguage: ECMAScript6\nEngine : Spider Monkey \nCopyrights: Scorp Industies");
          }else if(passcode== "latest update" || passcode=="update"){
            alert("1. Enhanced Mobile Compatibility.\n2.New Feature: Dark Mode \n3. New help and Support.\n 4. Mode Changes are Dynamic");
          } 
          else if(passcode=="dark mode")
          {
            alert("Dark mode is added to in update 1.2 on August 26 . It can remain there even after you have closed the Application.\n Copyrights: Scorp Industries");
          }
          else if (passcode == "mikku") {
            alert("I love You");
          } 
           else {
            alert("Security checkup failed");
            mode = 0;
            document.querySelector(".title1").innerHTML = "Calculator";
            document.querySelector(".sub_title").style.fontSize = "small";
          }
        } else {
          input.value = eval(input.value);
        }
      } else if (value == "back") {
        var len = input.value.length;
        // console.log(len);
        input.value = input.value.substring(0, len - 1);
      } else {
        input.value += value;
      }
      // console.log(input.value);
      if (input.value > 9999999999) {
        input.style.fontSize = "2.5em";
        input.style.padding = "5.5em 0 0 0";
      }

      if (input.value > 999999999999999) {
        range = 1;
        alert("out of range\n0-9999999999");
        console.log("out of range");
      }
    };
  });
});
