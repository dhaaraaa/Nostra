var navbar = document.getElementById("navbar");
var opened = document.getElementById("opened")
var closes = document.getElementById("closes");
var offer = document.getElementById("offer");
var offerSection = document.getElementById("offerSection");
var next = document.getElementById('next');
var prev = document.getElementById('prev')

opened.addEventListener("click", function () {
    navbar.style.left = "0%"
    navbar.style.transition = "0.7s"
})

closes.addEventListener("click", function () {
    navbar.style.left = "-100% "
    navbar.style.transition = "1s"
})
offer.addEventListener("click", function () {
    offerSection.style.display = "none"
})


var currentIndex = 1;
var totalImages = 4;
var intervalTime = 4000;

function showImage(index) {
    for (var i = 1; i <= totalImages; i++) {
        var img = document.getElementById('img' + i);
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    }
}

function nextImage() {
    currentIndex = (currentIndex % totalImages) + 1;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 2 + totalImages) % totalImages + 1;
    showImage(currentIndex);
}

document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);

var autoChangeInterval = setInterval(nextImage, intervalTime);

document.getElementById('next').addEventListener('click', function () {
    clearInterval(autoChangeInterval);
});

document.getElementById('prev').addEventListener('click', function () {
    clearInterval(autoChangeInterval);
});

showImage(currentIndex);



function home() {
    event.preventDefault()
    document.querySelector("#heroSection").scrollIntoView({
        behavior: "smooth"
    })
}
function Arrival() {
    event.preventDefault()
    document.querySelector("#Arrival").scrollIntoView({
        behavior: "smooth"
    })
}
function wanted() {
    event.preventDefault()
    document.querySelector("#wanted").scrollIntoView({
        behavior: "smooth"
    })
}

function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 100; 

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();