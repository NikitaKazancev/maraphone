"use strict";

// window.addEventListener('DOMContentLoaded', () => {
//     const screens = document.querySelectorAll('.screen'),
//         timer = screens[2].querySelector('#time'),
//         board = screens[2].querySelector('.board');

//     let time = 0,
//         score = 0;

//     screens[0].querySelector('.start').addEventListener('click', e => {
//         e.preventDefault();
//         screens[0].classList.add('up');
//     });

//     screens[1].querySelector('.time-list').addEventListener('click', e => {
//         if (e.target.matches('.time-btn')) {
//             screens[1].classList.add('up');
//             time = +e.target.getAttribute('data-time');

//             preparation(3);
//         }
//     });

//     const setTime = () => {
//         if (time < 10) timer.textContent = `00:0${time}`;
//         else timer.textContent = `00:${time}`;
//     };

//     const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
//     const getRandomColor = () => {
//         let str = getRandomNumber(0, 255**4).toString(16);
//         while (str.length < 6) str += '0';
//         return str;
//     };

//     const createCircle = () => {
//         const {width, height} = board.getBoundingClientRect();
//         const size = getRandomNumber(10, 60);

//         board.innerHTML += `<div
//         style="
//             height: ${size}px;
//             width: ${size}px;
//             top: ${getRandomNumber(0, height - 60)}px;
//             left: ${getRandomNumber(0, width - 60)}px;
//             background-color: #${getRandomColor()}
//         "
//         class="circle"></div>`;
//     };

//     const finishGame = () => {
//         timer.parentElement.classList.add('hide');
//         board.querySelector('.circle').remove();
//         board.innerHTML += `<h3 style="font-size: 70px">Счёт: <span class="primary">${score}</span></h3>`;
//     };

//     const startGame = () => {
//         createCircle();
//         const intervalId = setInterval(() => {
//             time--;
//             if (time === 0) {
//                 finishGame();
//                 clearInterval(intervalId);
//             }
//             else setTime();
//         }, 1000);

//         board.addEventListener('click', e => {
//             if (e.target.matches('.circle')) {
//                 score++;
//                 e.target.remove();
//                 createCircle();
//             }
//         });
//     };

//     const preparation = (timer) => {
//         setTime();
//         const intervalId = setInterval(() => {
//             if (timer === 0) {
//                 clearInterval(intervalId);
//                 board.innerHTML = '';
//                 startGame();
//             }
//             else board.innerHTML = `<h3 class="primary" style="font-size: 90px">${timer--}</h3>`;
//         }, 1000);
//     };
// });
