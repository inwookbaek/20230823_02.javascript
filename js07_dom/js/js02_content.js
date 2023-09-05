const title = document.querySelector('#title');
title.onclick = () => title.innerText = "홍길동의 프로필";

// 1. 이름을 클릭하면 '임꺽정' 변경하기
// const userName = document.querySelector('.user');
// userName.onclick = () => userName.innerText = "이름: <b>임꺽정</b>"; 
const userName = document.querySelector('#desc > p');
userName.onclick = () => userName.innerHTML = "이름: <b>임꺽정</b>"; 

// 2. 이미지를 클릭하면 pf2.png로 변경하기
const userImage = document.querySelector('#profile img');
userImage.onclick = () => userImage.src = "images/pf2.png";
