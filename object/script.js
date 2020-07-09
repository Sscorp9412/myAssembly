document.addEventListener("DOMContentLoaded", () => {
  var data = {
    Name: document.querySelector("#name"),
    age: document.querySelector("#age"),
    food: document.querySelector("#food"),
  };

  document.querySelector("form").onsubmit = () => {
    var len = {
      Name: data.Name.value.length,
      age: data.age.value,
      food: data.food.value.length,
    };
    if (len.Name > 0 && len.age > 0 && len.food > 0) {
      var ls = document.createElement("li");
      ls.innerHTML =
        'My Name is <span class="after">' +
        data.Name.value +
        "</span> ,I'm " +
        data.age.value +
        " ,I like " +
        data.food.value +
        " .";
      document.querySelector("ul").append(ls);
      data.Name.value = "";
      data.age.value = "";
      data.food.value = "";

      return false;
    } else {
      alert("Input Field Is Empty");
    }
  };
});
