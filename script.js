const menu = document.querySelector('.menu');
const menuList = document.querySelector('nav');
const menuIcon = document.getElementById('menuIcon');
menu.addEventListener('click', () => {
    menuList.classList.toggle('showmenu');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
});
window.addEventListener('contextmenu', (event)=> {
    alert('Right is disabled.')
    event.preventDefault();
});