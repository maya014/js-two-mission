const date = new Date();

const renderCalendar =() =>{
  date.setDate(1);

  const monthdays = document.querySelector(".days"); //მისამართი ჰტმლში
 
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

 const FirstDayindex = data.getDay();

const lastDayindex =  new Date(
  date.getFullYear(),
  date.getMonth() + 1,
   ).getDate();
}