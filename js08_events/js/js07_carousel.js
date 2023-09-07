const container = document.querySelector('#container');
const pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg','pic-6.jpg']
const arrows = document.querySelectorAll(".arrow"); // 화살표

container.style.backgroundImage = `url(images/${pics[0]})`;

let i = 0; // 이미지배열의 첫 번째 이미지 인덱스

arrows.forEach(arrow => {
  arrow.addEventListener('click', e => {
    if(e.target.id === 'left') {
      i--; // 이전이미지
      if(i<0) {
        i = pics.length - 1;
      }
    } else if(e.target.id === 'right') {
      i++; // 다음이미지
      if(i>pics.length) {
        i = 0;
      }
    }
    container.style.backgroundImage = `url(images/${pics[i]})`;
  })
});