// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    const navHeight = navbar.offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Close mobile menu when clicking any link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Menu item hover effects
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.classList.add('hover:bg-stone-100');
            this.style.transition = 'all 0.3s ease';
        });

        item.addEventListener('mouseleave', function () {
            this.classList.remove('hover:bg-stone-100');
        });
    });

    // Wine glass animation on hover
    const wineIcons = document.querySelectorAll('.wine-icon');
    wineIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.classList.add('animate-bounce');
            setTimeout(() => {
                this.classList.remove('animate-bounce');
            }, 1000);
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function () {
        const heroSection = document.querySelector('header');
        if (heroSection) {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    // Add fade-in animation to sections as they come into view
    const sections = document.querySelectorAll('section');
    const fadeIn = function () {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    };

    // Initialize visible sections
    sections.forEach(section => section.classList.add('fade-in'));
    fadeIn();

    // Update on scroll
    window.addEventListener('scroll', fadeIn);
});