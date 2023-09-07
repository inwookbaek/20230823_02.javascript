const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
 let curr = new Date();
 let hh = curr.getHours() * 30;
 let mm = curr.getMinutes() * deg;
 let ss = curr.getSeconds() * deg;

 hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
 mn.style.transform = `rotateZ(${mm}deg)`;
 sc.style.transform = `rotateZ(${ss}deg)`;
});