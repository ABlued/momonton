const nameContainer = document.querySelector(".js-name");
const now = new Date();
const hours = now.getHours();

function random(List){
  return Math.floor(Math.random() * List.length);
}

function paintName(name) {
  nameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";

  if(0 <= hours && hours < 6){    // 새벽일 때(0시 ~ 6시)
    fetch('data/drawList.json')
    .then(response => response.json())
    .then(json => {
      const randomNumber = random(json.data);
      title.innerHTML = `새벽에 뭐해 ${name}아? ${json.data[randomNumber]}`;
    })
  }

  else if(6 <= hours && hours < 11){  // 아침일 때(6시 ~ 11시)
    fetch('data/morningList.json')
    .then(response => response.json())
    .then(json => {
      const randomNumber = random(json.data);
      title.innerHTML = `잘잤니 ${name}아? ${json.data[randomNumber]}`;
    })
  }

  else if(11 <= hours && hours < 15){ // 낮일 때(11시 ~ 15시)
    fetch('data/foodList.json')
    .then(response => response.json())
    .then(json => {
      const randomNumber = random(json.data);
      title.innerHTML = `안녕 ${name}아 점심으로 ${json.data[randomNumber]} 어때?`;
    })
  }

  else if(15 <= hours && hours < 18){ // 저녁일 때(15시 ~ 18시)
    fetch('data/foodList.json')
    .then(response => response.json())
    .then(json => {
      const randomNumber = random(json.data);
      title.innerHTML = `안녕 ${name}아 저녁으로 ${json.data[randomNumber]} 어때?`;
    })
  }

  else{ // 밤일 때 (18시~ 24시)
    fetch('data/drinkList.json')
    .then(response => response.json())
    .then(json => {
      const randomNumber = random(json.data);
      title.innerHTML = `오늘도 고생많았어 ${name}아! ^_^ 시원한 ${json.data[randomNumber]} 어떠니?`;
    }) 
  }
  nameContainer.appendChild(title);
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value;
  localStorage.setItem("username", value);
  paintName(value);
}

function paintInput() {
  const input = document.createElement("input");
  input.placeholder = "너의 이름은";
  input.type = "text";
  input.className = "name__input";
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  nameContainer.appendChild(form);
}

function loadName() {
  const name = localStorage.getItem("username");
  if (name === null) {      //이름을 아직 입력하지 않았을 때
    paintInput();
  } else {                  //이름을 입력했을 때
    paintName(name);
  }
}

function init() {
  loadName();
}

init();