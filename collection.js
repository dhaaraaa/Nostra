var navbar = document.getElementById("navbar");
var opened = document.getElementById("opened");
var closes = document.getElementById("closes");
var offer = document.getElementById("offer");
var offerSection = document.getElementById("offerSection");
var next = document.getElementById('next');
var prev = document.getElementById('prev');

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

function home(event) {
    event.preventDefault();
    document.querySelector("#heroSection").scrollIntoView({
        behavior: "smooth"
    });
}

function Arrival(event) {
    event.preventDefault();
    document.querySelector("#Arrival").scrollIntoView({
        behavior: "smooth"
    });
}

function wanted(event) {
    event.preventDefault();
    document.querySelector("#wanted").scrollIntoView({
        behavior: "smooth"
    });
}

var search = document.getElementById("search");
var container = document.getElementById("division");
var productList = container.querySelectorAll("div");
search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();
    for (var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("h1").textContent;
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});


// ---------checkboxes-----------
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input.filter-checkbox');
    const images = document.querySelectorAll('#division > div');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterImages);
    });

    function filterImages() {
        const Colors = Array.from(document.querySelectorAll('input[name="color"]:checked'))
            .map(checkbox => checkbox.dataset.category.toLowerCase());
        const Arrivals = Array.from(document.querySelectorAll('input[name="arrival"]:checked'))
            .map(checkbox => checkbox.dataset.category.toLowerCase());
        const Occasions = Array.from(document.querySelectorAll('input[name="occasion"]:checked'))
            .map(checkbox => checkbox.dataset.category.toLowerCase());

        images.forEach(image => {
            const imageColors = image.dataset.color ? image.dataset.color.toLowerCase().split(' ') : [];
            const imageArrivals = image.dataset.arrival ? image.dataset.arrival.toLowerCase().split(' ') : [];
            const imageOccasions = image.dataset.occasion ? image.dataset.occasion.toLowerCase().split(' ') : [];

            const isColorMatch = !Colors.length || Colors.some(color => imageColors.includes(color));
            const isArrivalMatch = !Arrivals.length || Arrivals.some(arrival => imageArrivals.includes(arrival));
            const isOccasionMatch = !Occasions.length || Occasions.some(occasion => imageOccasions.includes(occasion));

            image.style.display = isColorMatch && isArrivalMatch && isOccasionMatch ? 'block' : 'none';
        });
    }
});



