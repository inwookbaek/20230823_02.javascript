const elements = document.querySelectorAll('*');

for(let element of elements) {
  element.addEventListener(
    'click', 
    e => console.log(`event.target : ${e.target.tagName}, event.currTarget : ${e.currentTarget.tagName}`),
    true); 
}