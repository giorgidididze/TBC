window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

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
