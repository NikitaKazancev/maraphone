"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const gamePlugin = (container, count) => {
        const getRandomColor = () => {
            return Math.round(Math.random() * 255**4).toString(16);
        }

        for (let i = 0; i < count; i++) {
            const item = document.createElement('div');
            item.classList.add('item');
            container.append(item);

            item.addEventListener('mouseover', () => item.style.backgroundColor = `#${getRandomColor()}`);
            item.addEventListener('mouseleave', () => item.style.backgroundColor = '#1d1d1d');
        }
    };

    gamePlugin(document.querySelector('.container'), 950);
});