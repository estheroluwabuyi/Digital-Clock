
  const hoursEl = document.querySelector(".hours");
  const minutesEl = document.querySelector(".minutes");
  const secondsEl = document.querySelector(".seconds");
  const amPmEl = document.getElementById('amPm');
  

const digitalClock = () =>{
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let amPm = "AM";
  
  if (h > 12) {
    h -= 12; //(h = h - 12)
    amPm = "PM";
    amPmEl.textContent = amPm;
  } else {
    h
  }
  
  h = h < 10 ? "0" + h: h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s: s;
 
  hoursEl.textContent = h;
  minutesEl.textContent = m;
  secondsEl.textContent = s;
  
 // setTimeout( () => {
   // digitalClock();
 // },1000);
  
};

  setTimeout( () => {
    digitalClock();
  },1000);
//digitalClock();

/*d = (d === 0) ? "Sunday," : d;
d = (d === 1) ? "Monday," : d;
d = (d === 2) ? "Tuesday," : d;
d = (d === 3) ? "Wednesday," : d;
d = (d === 4) ? "Thursday," : d;
d = (d === 5) ? "Friday," : d;
d = d === 6 ? "Saturday," : d;
currentDayEl.textContent = d;*/

    
 /* h = h -12;
 //works for 12hr format e.9 instead of 13:00 you'd get 01:00pm and you dint need AM or PM. JavaScript automatically uses the 24 hr format that is instead of 01:00 pm, it'd use 13:00*/
