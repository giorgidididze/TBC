window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});
});

function toggleNavbar() {
    var navbarResize = document.getElementById("navbar_main_responsive");
    navbarResize.style.display = (navbarResize.style.display === "block") ? "none" : "block";
}

function checkWindowSize() {
    var navbarMain = document.getElementById("navbar_main");
    var myNavbar = document.getElementById("myNavbar");

    if (window.innerWidth < 900) {
        navbarMain.style.display = "none";
        myNavbar.style.display = "block";
    } else {
        navbarMain.style.display = "block";
        myNavbar.style.display = "none";
    }
}

window.onload = checkWindowSize;

window.onresize = checkWindowSize;
