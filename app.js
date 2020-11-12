const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar');
const manu = document.querySelector('.menu-bar')

btn.addEventListener('click', ()=>{
    nav.classList.toggle('change');
    manu.classList.toggle('change')
});

//const nav = document.querySelector('.navbar');
const b2t = document.querySelector('.scroll-btn');

window.onscroll = () => {
    scroll()
}



function scroll() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    b2t.style.display = "block"; 
  } else {
    b2t.style.display = "none";
  }
}

b2t.addEventListener('click', () => {
    document.body.scrollTop = '0';
    document.documentElement.scrollTop = '0';

})