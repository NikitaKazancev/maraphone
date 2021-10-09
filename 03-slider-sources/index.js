"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const slidesPlugin = (wrap, upBtn, downBtn, count, {initialId = 1, delay = 500, keyDownForwardDirection = null} = {}) => {
        let currentId = initialId,
            abbleToClick = true;

        const setActiveSlide = (id, first = false) => {
            if (abbleToClick) {
                currentId = id;
                abbleToClick = false;

                if (!first) wrap.style.transition = `all ${delay}ms`;
                wrap.style.top = `-${id * 100}vh`;

                setTimeout(() => {
                    abbleToClick = true;
                    wrap.style.transition = "";
                    
                    if (id === 0) {
                        wrap.style.top = `-${(count - 2) * 100}vh`;
                        currentId = count - 2;
                    }
                    else if (id === count - 1) {
                        wrap.style.top = `-100vh`;
                        currentId = 1;
                    }
                }, delay + 50);
            }
        };

        upBtn.addEventListener('click', () => setActiveSlide(currentId - 1));
        downBtn.addEventListener('click', () => setActiveSlide(currentId + 1));
        if (keyDownForwardDirection !== null) {
            document.addEventListener('keydown', (e) => e.key === "ArrowDown" ? ( keyDownForwardDirection ? setActiveSlide(currentId - 1) : setActiveSlide(currentId + 1) ) : false);

            document.addEventListener('keydown', (e) => e.key === "ArrowUp" ? ( keyDownForwardDirection ? setActiveSlide(currentId + 1) : setActiveSlide(currentId - 1) ) : false);
        }

        setActiveSlide(currentId, true);
    };

    slidesPlugin(
        document.querySelector('.main-slide'),
        document.querySelector('.up-button'),
        document.querySelector('.down-button'),
        document.querySelectorAll('.main-slide > div').length,
        {keyDownForwardDirection: true}
    );

    slidesPlugin(
        document.querySelector('.sidebar'),
        document.querySelector('.down-button'),
        document.querySelector('.up-button'),
        document.querySelectorAll('.sidebar > div').length,
        {
            initialId: document.querySelectorAll('.sidebar > div').length - 2,
            keyDownForwardDirection: false
        }
    );
});