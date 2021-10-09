"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const slidesPlugin = (slides, {activeClass = 'slide_active', initialSlide = 2} = {}) => {
        slides[initialSlide].classList.add(activeClass);

        slides.forEach(slide => slide.addEventListener('click', () => {
            slides.forEach(slide => slide.classList.remove(activeClass));
    
            slide.classList.add(activeClass);
        }));
    };

    const slides = document.querySelectorAll('.slide');

    document.querySelectorAll('.slide h3').forEach(h3 => h3.textContent === "Liquor" || h3.textContent === "Juice" ? h3.style.color = "#fff" : false);

    slidesPlugin(slides);
});