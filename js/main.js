// navigation bar
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle navigation link clicks
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
    function handleNavClick(event) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
    }
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Function to dynamically change active design based on window scroll
    function setActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

        sections.forEach(section => {
            const navLink = document.querySelector(`.nav-link[data-section="${section.id}"]`);
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - sectionHeight / 3 && window.pageYOffset < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                {navLink.classList.add('active');}
                
            }
        });
    }
    // Add event listener for scroll event to call setActiveLink on scroll
    window.addEventListener('scroll', function () {
        // Function to handle navbar scroll class
        var navbar = document.querySelector('.navigation_bar');
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Call setActiveLink on scroll
       {setActiveLink();} 
    });

    window.addEventListener('DOMContentLoaded', function () {
        function updateNavbarClass() {
            var navbar = document.querySelector('.navigation_bar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        window.addEventListener('scroll', updateNavbarClass);

        window.addEventListener('load', function () {
            updateNavbarClass();
        });
    });
});




// hero section swiper
var swiper = new Swiper(".hero-swiper", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
//hero section slide 3 slider
var swiper = new Swiper(".hero-section-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
});



// category section swiper
var swiper = new Swiper(".category-swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".category-button-next",
        prevEl: ".category-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        1120: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// gallery sectio js
var images = ['./img/img_gallery_001.png', './img/img_gallery_01.png', './img/img_gallery_002.png', './img/img_gallery_02.png', './img/img_gallery_003.png', './img/img_gallery_03.png', './img/img_gallery_004.png', './img/img_gallery_04.png', './img/img_gallery_005.png', './img/img_gallery_05.png', './img/img_gallery_006.png', './img/img_gallery_06.png'];
var currentIndex = 0;

function openFullScreen(element) {
    var imgSrc = element.src;
    document.getElementById('fullscreenImage').src = imgSrc;
    document.getElementById('fullscreenContainer').style.display = 'block';
    currentIndex = images.indexOf(imgSrc);
}

function closeFullScreen() {
    document.getElementById('fullscreenContainer').style.display = 'none';
}

function navigateImage(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    document.getElementById('fullscreenImage').src = images[currentIndex];
}


// back-to-top
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





