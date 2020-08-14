const nameContainer = document.querySelector(".js-name");
const now = new Date();
const hours = now.getHours();
const drawList = ["심심하면 나한테 카톡 보내볼래?", "그거 아니? 너 뒤에 귀신 있는거", "넷플릭스 보는 거 다알아", "유투브 보는 거 다알아",
              "손에 들고 있는 거 내려놔. 지금 먹으면 살쪄", "착한 어린이는 일찍 자야해", "미인은 일찍 잔다는 거 모르니?", "내일 일하러 가야지",
            "지금 이 순간에도 나와 함께 해서 고마워", "졸업해도 나 만나줄거야?", "무서운얘기 해줄까? 2주후에 개강이야", "과제는 다하고 자니?",
          "뭐 잊은 일 없니? 재완이한테 기프티콘보내기라던가", "오늘 무슨일 있었니? 너 많이 힘들어보여", "내가 별을 따다 줄게", "야동 그만봐",
        "배경화면 사진 이쁘지? 근데 그거 아니? 너가 더 이뻐", "휴대폰 충전하는거 잊지말구!", "너도 밤이 좋니?", "너는 마치 달 같아. 상처를 숨기고 사람들에게 좋은 모습만 보여주는 모습이"];
const morningList = ["오늘도 좋은 하루 보내 ^_^", "마스크 쓰는거 잊지말고!", "신분증 가져가는거 잊지말고!", "아침 꼭 챙겨먹기!",
                  "이 문구를 본다면 너는 부지런한 사람이야","그거 아니? 11시 이후에 음식추천해주는 문구가 여기에 나온다는걸",
                "모닝똥 잊지말기! 회사에서!", "양치하고가 입냄새나", "너 오늘 하루종일 잠만 잘거 아니지?", "오늘 한 번 사진속에 나와있는 곳으로 가보는게 어떠니?",
              "해장은 했니? 콩나물국밥 한사바리쓱싹어때?"];


const foodList = ["샥스핀", "매운갈비", "감자탕", "김밥", "따끈한 돼지국밥에 풋고추 아삭 먹어보는게", "김치찜", "라면",
                  "돈까스", "내 마음", "엽떡", "가나슈", "짜장면에 고춧가루 살짝", "따끈한 순대국밥에 풋고추 아삭 먹어보는게", "오므라이스",
                "도미노피자", "참이슬", "아스파라거스", "게살버거", "곱창", "나박김치",
              "똠양꿍", "교촌치킨 허니콤보", "개밥", "학식 육회덮밥", "어제먹다 남은 반찬",
            "절밥", "산나물비빔밥", "소 한마리", "하와이얀 피자", "모히또", "조각케익",
          "벌꿀 아이스크림", "김밥튀김", "빕스가서 스테이크 써는 게", "그냥 굶는 게", 
          "동생 거 뺏어먹는게", "생선대가리 카레", "재완이가 만든 콘치즈", "허니버터칩",
        "꽃게랑", "가나초콜릿", "육회지존", "애슐리", "타이어", "편의점 샌드위치",
      "맘스터치 싸이버거", "냉면", "삼계탕", "양꼬치", "민트초코 아이스크림", "아메리카노",
    "마카롱", "팔라펠", "코샤리", "재완이한테 사달라는 게", "불고기", "먹기 전에 좀 씻는게",
  "그만 먹는 게", "남자친구한테 사달라는 게", "여자친구한테 사달라는 게", "오이도역 바지락칼국수",
"닭강정", "스팸", "맥도날드", "돼지껍데기", "뭐먹지말고 너의 뱃살을 바라보는 게", "눈감고 냉장고에서 아무거나 집어서 먹는 게",
"코끼리코 열바퀴 돌고 처음으로 바라본 식당에서 먹는 게", "부모님 맛있는 거 사드리는 것이",
"푸팟퐁커리", "케밥", "부리또", "사와르마", "리조또", "타타르 스테이크","마라탕 매운맛 3단계", "사진속에 나와있는 거", "콘푸로스트"];

const drinkList = ["몬스터", "레드불", "ZICO", "블랑", "칭따오", "하이네켄", "스프라이트","코카콜라",
"망고주스", "녹차 프라프치노", "실론티", " 솔의눈", "데자와", " 여명808", "박카스", 
"Double shot iced shaken expresso", "밀크티", "버블티", "단백질쉐이크", "쪼꼬우유", "코젤",
"기네스", "물 한잔", "샴페인", "치즈에 보드카", "소곡주", "꿀주(소주 9 : 맥주 1)", "깔라만시",
"자판기가서 눈감고 아무거나 눌러보는 게", "깔라만시(토닉워터 1 : 깔라만시 1)", "고진감래주(소주 + 맥주 + 콜라)",
"소니니(소주 + 버니니)", "스크류 키스(스크류바 + 소주 + 사이다)","소백산맥(소주 + 백세주 + 산시춘 + 맥주)","민트초코 아이스크림",
"빠삐코", "구슬 아이스크림", "사진속에 나와있는 거", "콜라에 교촌치킨 허니콤보", "호가든", "스텔라" ,"흑당버블티", "공차 딸기스무디"];


function random(List){
  const number = Math.floor(Math.random() * List.length);
  return number;
}

function paintName(name) {
  nameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";
  if(0 <= hours && hours < 6){
    const randomNumber = random(drawList);
    title.innerHTML = `새벽에 뭐해 ${name}아? ${drawList[randomNumber]}`;
  }
  else if(6 <= hours && hours < 11){
    const randomNumber = random(morningList);
    title.innerHTML = `잘잤니 ${name}아? ${morningList[randomNumber]}`;
  }
  else if(11 <= hours && hours < 15){
    const randomNumber = random(foodList);
    title.innerHTML = `안녕 ${name}아 점심으로 ${foodList[randomNumber]} 어때?`;
  }
  else if(15 <= hours && hours < 18){
    const randomNumber = random(foodList);
    title.innerHTML = `안녕 ${name}아 저녁으로 ${foodList[randomNumber]} 어때?`;
  }
  else{
    const randomNumber = random(drinkList);
    title.innerHTML = `오늘도 고생많았어 ${name}아! ^_^ 시원한 ${drinkList[randomNumber]} 어떠니?`;
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