const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";


function init(){
    loadName();
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){      
         //만들어져 있지 않을 때
         askForName();
    }
    else{                          
        //만들어져 있을때
        paintGreeting(currentUser);
    }
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `hello ${text}`
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit)
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function saveName(text){
    localStorage.setItem(USER_LS, text); 
}
init(); 