const container = document.querySelector('#container');
const arrows = document.querySelectorAll('.arrow');
const pics = ['bp01.jpg','bp02.jpg','bp03.jpg'];

container.style.backgroundImage = `url(./images/${pics[0]})`;
let i = 0;

arrows.forEach(arrow => {
  arrow.addEventListener('click', e => {
    if(e.target.id === "left") {
      i--;
      if(i<0) i = pics.length - 1;
    } else if(e.target.id === "right") {
      i++;
      if(i>=pics.length) i = 0;
    }
    console.log(i)
    container.style.backgroundImage = `url(./images/${pics[i]})`;
  })
})
