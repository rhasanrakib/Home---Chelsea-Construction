const btn = document.querySelector('.btnClickToShow');
const text = document.querySelector('.toShow');
btn.addEventListener('click',(e)=>{
console.log('click')
text.classList.toggle('expandText');
})