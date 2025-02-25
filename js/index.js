document.addEventListener("DOMContentLoaded", function () {
    AOS.init();

    // Efek mengetik
    var typed = new Typed('.typing', {
        strings: ['RISMA MARTHEN SULLE', 'RISMA MARTHEN SULLE', 'RISMA MARTHEN SULLE'],
        typeSpeed: 70,
        backSpeed: 110,
        loop: true
    });

    // Navbar berubah warna saat di-scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("navbar-solid");
            header.classList.remove("navbar-transparent");
        } else {
            header.classList.add("navbar-transparent");
            header.classList.remove("navbar-solid");
        }
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const heroSection = document.querySelector(".hero-section");

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
            heroSection.classList.toggle("blur");
        });
    }

    // Menutup menu saat link ditekan
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileMenu.classList.add("hidden");
            heroSection.classList.remove("blur");
        });
    });

    // Responsive adjustments
    function adjustLayout() {
        if (window.innerWidth <= 768) {
            document.body.classList.add("mobile-view");
        } else {
            document.body.classList.remove("mobile-view");
        }
    }

    window.addEventListener("resize", adjustLayout);
    adjustLayout();
});