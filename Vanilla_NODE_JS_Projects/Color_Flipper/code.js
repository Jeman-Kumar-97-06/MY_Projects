let body = document.querySelector('.bod');
let btn  = document.querySelector('.click');
let clr  = document.querySelector('.color-info');
let bod  = document.querySelector('.bod');
btn.addEventListener('click',()=>{
    let rd = ()=>{ return Math.round(Math.random()*(256));};
    bod.style.backgroundColor = `rgb(${rd()},${rd()},${rd()})`;
    clr.textContent = `Background Color : rgb(${rd()},${rd()},${rd()})`
})