const box = document.querySelector('#box');

box.addEventListener('click', e => {

  // pageX, Y : 현재 문서를 기준으로 이벤트가 발생한 가로/세로 위치
  alert(`이벤트가 발생된 위치(by page) : ${e.pageX}, ${e.pageY}`);

  // clientX,Y : 이벤트가 발생한 가로/세로 위치
  alert(`이벤트가 발생된 위치(by client) : ${e.clientX}, ${e.clientY}`);

  // screenX, Y : 현재 화면을 기준으로 이벤트가 발생한 가로/세로위치
  alert(`이벤트가 발생된 위치(by screen) : ${e.screenX}, ${e.screenY}`);
})