  
  
  function ppp() {

    let userInput = document.querySelector('.input').value.toLowerCase();
    let show = document.querySelector('.name');

  
    if (userInput === "karachi") {
        show.innerHTML = "welcome city of lights";
    }
    else {
        show.innerHTML = "welcome";

    }


}

