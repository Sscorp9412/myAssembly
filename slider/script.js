document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#slider").onclick = hello;
});

let flag = 0;

function theme(type) {
  var body = document.querySelector("body");
  var back = document.querySelector(".back");
  var page = document.querySelector(".page");
  var para = document.querySelector(".main_one");
  var list = document.querySelectorAll("li");
  var col = "linear-gradient(270deg, rgb(0, 255, 255), rgb(0, 98, 255))";

  if (type == "black") {
    body.style.background = "black";
    back.style.background = "grey";
    page.style.background = "grey";
    para.style.color = "yellow";
    list.forEach((sel) => {
      sel.style.background = "black";
    });
    list.forEach((sel) => {
      sel.style.color = "yellow";
    });
  } else {
    body.style.background =
      "linear-gradient(270deg, rgb(0, 255, 255), rgb(0, 98, 255))";
    back.style.background =
      "linear-gradient(90deg, rgb(80, 223, 24), rgb(70, 192, 21))";
    page.style.background = "white";
    para.style.color = "Grey";
    list.forEach((sel) => {
      sel.style.background = "crimson";
    });
    list.forEach((sel) => {
      sel.style.color = "white";
    });
  }
}

function hello() {
  // =========================Variables===========================================================

  var ball = document.querySelector("#ball");
  var slider = document.querySelector("#slider");
  var page = document.querySelector(".page");

  //============================END=============================================================
  if (flag == 0) {
    ball.style.transform = "translate(1.8em,0)";

    ball.style.transition = "all .4s ease";

    slider.style.background = "lawngreen";

    slider.style.transition = "all .6s ease";

    page.style.opacity = ".1";

    theme("black");

    flag = 1;
  } else {
    ball.style.transform = "translate(0em,0)";

    ball.style.transition = "all .4s ease";

    slider.style.background = "grey";

    slider.style.transition = "all .7s ease";

    page.style.opacity = "1";

    theme("White");
    flag = 0;
  }
}
