
document.addEventListener('DOMContentLoaded', () => {
   const def = document.querySelector('.about');
    const landing = 0;
    window.scrollTo(0, landing);
    
    const textRotate = document.querySelector('.text-rotate');
    const text = textRotate.textContent;
    const splitText = text.split('');

    textRotate.textContent = '';

    for (let i = 0; i < splitText.length; i++) {
        textRotate.innerHTML += `<span>${splitText[i]}</span>`;
    }

    const spanText = document.querySelectorAll('span');

    textRotate.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
        spanText.forEach((span) => {
            span.style.transform = `rotateY(${xAxis*2}deg) rotateX(${yAxis*2}deg)`;
        });
    });

    textRotate.addEventListener('mouseleave', () => {
        spanText.forEach((span) => {
            span.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    });

   


});

var eye = document.querySelector('.eye_mask');
var pupil = document.querySelector('.eye');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX - eye.getBoundingClientRect().left - eye.offsetWidth / 2;
    var y = e.clientY - eye.getBoundingClientRect().top - eye.offsetHeight / 2;
    var angle = Math.atan2(y, x);
    var distance = Math.min(Math.sqrt(x * x + y * y), eye.clientHeight/2.5);
    pupil.style.transform = 'translate(' + (distance * Math.cos(angle)) + 'px, ' + (distance * Math.sin(angle)) + 'px)';
});
var eye_c=document.querySelector(".eye_container");

eye_c.addEventListener('click',function(){
    var audio = document.getElementById('aud');
    audio.play();

    var water=document.querySelector(".ocean");
    var cur_h=(water.clientHeight/water.parentElement.clientHeight)*100;
    water.style.height=`${cur_h+10}%`;
    if(cur_h>=100){
        water.style.height = `0%`;

    }
    var tear=document.querySelector(".teardrop");
    tear.classList.add("animate");
    tear.addEventListener("animationend",()=>{tear.classList.remove("animate")});
});

window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / scrollHeight) * 100;
    console.log(scrollPercent + "%");
  
});








