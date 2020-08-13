const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

   
function init(){
    getTime();
}
function getTime(){
    const date = new Date(),
          minutes = date.getMinutes(),
          hours = date.getHours(),
          second = date.getSeconds();
          
    clockTitle.innerText = `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${second > 9 ? `${second}` : `0${second}`}`;
}   

init();
setInterval(init,1000);
