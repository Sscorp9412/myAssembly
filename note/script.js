
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("input[type='submit']").disabled=true;

 
    document.querySelector("#name").onkeyup=()=>{
        var name = document.querySelector("#name").value;
        var len = name.length;

        if(len>1)
        {
            document.querySelector("input[type='submit']").disabled=false; 
        }
        else
        {
            document.querySelector("input[type='submit']").disabled=true; 
        }
    }

  document.querySelector("form").onsubmit = () => {
    const li = document.createElement("li");
    var name = document.querySelector("#name").value;
    var len = name.length;
    console.log(len);

    if (len > 8) {
      li.innerHTML = name;

      document.querySelector("#task_list").append(li);

      document.querySelector("#name").value = "";
    } else {
      alert("write at least 2 words");
    }

    return false;
  };
});
