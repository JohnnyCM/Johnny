/*
 * Author: Johnny Castillo
 * File: script.js
 * Description: Handles interactivity, scroll animations, and mobile menu.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE MENU TOGGLE
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    if(toggleBtn) {
        toggleBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu); // Close when clicking outside
    }

    // 2. SCROLL REVEAL ANIMATION
    // Automatically finds all <section> tags and animates them when they enter the screen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the item is visible

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // 3. DYNAMIC YEAR
    // Updates the copyright year automatically
    const yearSpan = document.querySelector('#year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});