const btn = document.querySelector("button");
const popWidth  = 600; 
const popHeight = 500; 

btn.addEventListener('click', () => {
  let left = (screen.availWidth - popWidth) / 2;
  let top = (screen.availHeight - popHeight) / 2;
  window.open("http://www.naver.com", `width = ${popWidth} height= ${popHeight} left= ${left} top=${top}`)
});