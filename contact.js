var navbar = document.getElementById("navbar");
var opened = document.getElementById("opened");
var closes = document.getElementById("closes");
var offer = document.getElementById("offer");
var offerSection = document.getElementById("offerSection");

opened.addEventListener("click", function () {
    navbar.style.left = "0%";
    navbar.style.transition = "0.7s";
});

closes.addEventListener("click", function () {
    navbar.style.left = "-100%";
    navbar.style.transition = "1s";
});

offer.addEventListener("click", function () {
    offerSection.style.display = "none";
});
