const icon = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('.mobile-nav');

icon.addEventListener('click',function(){
    this.classList.toggle('menu-line-active');
    mobileNav.classList.toggle('mobile-nav-active');
});
