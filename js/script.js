// Toggle Hamburger
document.addEventListener('DOMContentLoaded', function(){
    const toggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    toggle.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
    });
});

// Change Navbar Background on scroll
window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');
    if(this.window.scrollY>0){
        navbar.classList.add('scroll');
    }
    else{
        navbar.classList.remove('scroll');
    }
})
