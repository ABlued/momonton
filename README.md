# :sunrise: Momonton 미니 프로젝트

##### 안녕하세요 ABlued입니다!

##### html, css, 바닐라JS, Open API로 만든 미니 프로젝트 Momonton에 대해 소개해드리겠습니다.

:clipboard: 프로젝트 개요
---

프로젝트 목적 : css,js에서 새롭게 배운 개념들을 활용하고 Open API를 사용해 현재 위치 날씨와 이미지를 받아오기  
참여자 : ABlued  
사용 스택 : HTML, CSS, JavaScript, JSON
작업 환경 : VSCode  
 
 
:wave: 홈페이지 소개
---
  
##### [프로젝트를 직접 보고 싶다면?[]](https://ablued.github.io/momonton/)
  
##### 홈페이지 화면 구성
![홈페이지 화면](https://user-images.githubusercontent.com/53801395/120751596-453c6a00-c543-11eb-992a-81ad62e315a4.jpg)

##### 이름을 입력했을때
![이름을 입력했을때](https://user-images.githubusercontent.com/53801395/120751077-5b95f600-c542-11eb-99f0-f2af0af38cbd.jpg)

##### 새로고침하거나 다시 들어올 때
![새로고침하거나 다시 들어올 때](https://user-images.githubusercontent.com/53801395/120751078-5b95f600-c542-11eb-8289-5d90806b2ee9.jpg)
    
##### 들어오는 시간대별로 다른 문구
![들어오는 시간대별로 다른 문구](https://user-images.githubusercontent.com/53801395/120751079-5c2e8c80-c542-11eb-91e0-540a7c8bb290.jpg)
  
##### ToDoList입력 시
![todolist입력시](https://user-images.githubusercontent.com/53801395/120751080-5cc72300-c542-11eb-8d58-3ccf087eebb4.jpg)
  
:books: 주로 쓰인 개념들 
---

+ CSS
    + import, flex, 가상 선택자

+ JavaScript
    + DON, Json 데이터 받아오기, Open API, 위도경도 계산




### :page_with_curl: 중요 코드 로직

##### Open API를 사용해 위도경도를 받아와 현재날씨를 알려주는 로직
코드 위치 : js->weather.js 7번째 줄에 위치
```
function getWeather(coords) {
  fetch(
    `${WEATHER_API}lat=${coords.lat}&lon=${
      coords.lng
    }&appid=${API_KEY}&units=metric`
  )
    .then(response => response.json())
    .then(json => {
      const name = json.name;
      const temperature = json.main.temp;
      weather.innerHTML = `${Math.floor(temperature)}° @ ${name}`;
    });
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const coords = {
    lat,
    lng
  };
  localStorage.setItem("coords", JSON.stringify(coords));
  getWeather(coords);
}
```
##### DOM 기본지식을 활용해 ToDoList 만들기
코드 위치 : js -> todo.js 33번째 줄에 위치
```
function handleDelete(event) {    //투두리스트 엘리멘트를 삭제
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const toDoId = li.id;
  ul.removeChild(li);
  toDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(toDoId);
  });
  persistToDos();
}

function addToDo(text) {    // 투두리스트 엘리멘트를 추가
  const toDo = document.createElement("li");
  toDo.className = "toDo";
  toDo.id = toDos.length + 1;
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.className = "toDo__button";
  deleteBtn.addEventListener("click", handleDelete);
  const label = document.createElement("label");
  label.innerHTML = text;
  toDo.appendChild(deleteBtn);
  toDo.appendChild(label);
  list.appendChild(toDo);
  saveToDo(text);
}
```
