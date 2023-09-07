const body = document.body;
const result = document.querySelector('#result');

body.addEventListener('keydown', e => {
  result.innerHTML = 
    `<h1 style='color: red'>키의 코드값 : ${e.code}, 키의 key : ${e.key}</h1>`
})