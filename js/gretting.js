const nameContainer = document.querySelector(".js-name");
const now = new Date();
const hours = now.getHours() + 12;
const foodList = ["샥스핀", "매운갈비", "감자탕", "김밥", "돼지국밥", "김치찜", "라면",
                  "돈까스", "내 마음", "엽떡", "가나슈", "짜장면", "순대국밥", "오므라이스",
                "도미노피자", "참이슬", "아스파라거스", "게살버거", "곱창", "나박김치",
              "똠양꿍", "교촌치킨 허니콤보", "개밥", "학식 육회덮밥", "어제먹다 남은 반찬",
            "절밥", "산나물비빔밥", "소 한마리", "하와이얀 피자", "모히또", "조각케익",
          "벌꿀 아이스크림", "김밥튀김", "빕스가서 스테이크 써는 게", "그냥 굶는 게", 
          "동생 거 뺏어먹는게", "생선대가리 카레", "재완이가 만든 콘치즈", "허니버터칩",
        "꽃게랑", "가나초콜릿", "육회지존", "애슐리", "타이어", "편의점 샌드위치",
      "맘스터치 싸이버거", "냉면", "삼계탕", "양꼬치", "민트초코 아이스크림", "아메리카노",
    "마카롱"];
const numberOfList = foodList.length;

function random(){
  const number = Math.floor(Math.random() * numberOfList);
  return number;
}

function paintName(name) {
  const randomNumber = random();
  nameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";
  if(0 <= hours && hours < 6){
    title.innerHTML = `새벽에 뭐해 ${name}아? 심심하면 나한테 카톡 보내볼래?`;
  }
  else if(6 <= hours && hours < 12){
    title.innerHTML = `잘잤니 ${name}아? 오늘도 좋은 하루 보내 ^_^`;
  }
  else if(12 <= hours && hours < 15){
    title.innerHTML = `안녕 ${name}아 점심으로 ${foodList[randomNumber]} 어때?`;
  }
  else if(15 <= hours && hours < 18){
    title.innerHTML = `안녕 ${name}아 저녁으로 ${foodList[randomNumber]} 어때?`;
  }
  else{
    //title.innerHTML = `오늘도 고생많았어 ${name}아! ^_^ 시원한 맥주 한 캔 어떠니?`;
    title.innerHTML = `안녕 ${name}아 저녁으로 ${foodList[randomNumber]} 어때?`;
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