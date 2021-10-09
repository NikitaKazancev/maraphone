"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const item = document.querySelector('.item');
    
    item.addEventListener('dragstart', e => {
        item.classList.add('held');
        setTimeout(() => item.classList.add('hide'));
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('held', 'hide');
    });

    const placeholders = document.querySelectorAll('.placeholder');

    placeholders.forEach(placeholder => {
        placeholder.addEventListener('dragover', e => e.preventDefault());
        placeholder.addEventListener('dragenter', () => placeholder.classList.add('placeholder_active'));
        placeholder.addEventListener('dragleave', () => placeholder.classList.remove('placeholder_active'));
        placeholder.addEventListener('drop', () => {
            placeholder.classList.remove('placeholder_active');
            placeholder.append(item);
        });
    });
});
