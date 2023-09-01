// 섭씨온도 = (화씨온도 - 32) / 1.8
let fah = parseFloat(prompt("변환할 화씨온도를 입력하세요!!"));
let cel = (fah-32)/1.8
// let tmp = document.getElementById('tmp');
// console.log(tmp);
// tmp.innerHTML = cel;
document.getElementById('tmp').innerHTML = ((fah-32)/1.8).toFixed(2);