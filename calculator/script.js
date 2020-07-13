document.addEventListener("DOMContentLoaded", () => {
    var range = 0;
    

  document.querySelector("h1").ondblclick=()=>{
        document.querySelector(".title1").style.fontSize=0;
        document.querySelector(".sub_title").style.fontSize=0;
        document.querySelector(".title2").style.fontSize="3rem";
     
  }

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
        display = 0;
      } else if (value == "=") {
        input.value = eval(input.value);
      } 
      else if (value == "back") {
        var len = input.value.length;
        // console.log(len);
        input.value = input.value.substring(0, len-1);
      } 
      else {
        input.value += value;
      }
      // console.log(input.value);
      if (input.value > 9999999999) {
        input.style.fontSize = "2.5em";
        input.style.padding="5.5em 0 0 0";
      }

      if (input.value > 999999999999999) {
        range = 1;
        alert("out of range\n0-9999999999");
        console.log("out of range");
      }
    };
  });
});
