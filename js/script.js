const date = new Date();

const renderCalendar =() => {
  date.setDate(1);

  const monthDays = document.querySelector(".days"); //მისამართი ჰტმლში
 
 const lastDay = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
  ).getDate();

 const prevLastDay = new Date(
  date.getFullYear(),
  date.getMonth(),
  0
  ).getDate();

 const FirstDayIndex = data.getDay();

const lastDayIndex =  new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
   ).getDay();

const nextDays = 7 - lastDayIndex - 1;

const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector(".data h1").innerHTML = months[data.getMonth()];

document.querySelector(".data p").innerHTML = new Date ().toDateString();

let days = "";
  

  for (let x =FirstDayIndex; x > 0; x--){
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
  for(let i = 1; i <= lastDay; i++){
    if(
      i === new date().getDate() && 
      date.getMonth() === new date().getMonth()
      ){
      days +=`<div class="today">${i}</div`;
    }else{
      days += `<div>${i}</div>`;
    }
  }
  for(let j = 1; j <= nextDays; j++){
    days +=`<div class="next-date">${j}<div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click",() =>{
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click",() => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
