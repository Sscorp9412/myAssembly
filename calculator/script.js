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
        if (input.value == "2+2+9412" && mode == 1) {
          var passcode = prompt("Passcode");
          passcode = passcode.toLowerCase();
          if (
            passcode == "nischay" ||
            passcode == "Gagan" ||
            passcode == "muddy" ||
            passcode == "aridane"
          ) {
            alert("Welcome Nishu\nFirewall Break:\nGo to next Open Port");
          } else if (passcode == "anu" || passcode == "mikku") {
            alert("I love You");
          } else if (passcode == "maanvi" || passcode == "charu") {
            alert("Name identified: My Most Lovely Sister");
          } else if (
            passcode == "manjula" ||
            passcode == "anusmita" ||
            passcode == "nimboo"
          ) {
            alert("My Life :" + passcode + ",Port:5050,'Welcome to Scorp'");
          } else if (
            passcode == "shero" ||
            passcode == "ankur" ||
            passcode == "deepak" ||
            passcode == "shantanu"
          ) {
            alert("Friends\naccess Granted\nWelcome to Scorp");
          } else if (passcode == "samakshi" || passcode == "sam") {
            alert("My Love: Dear Samakshi,Welcome to SCORP");
          } else {
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
