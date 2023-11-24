const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.slider img');

let counter = 1;
const size = images[0].clientWidth;

slider.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    slider.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    slider.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slider.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    slider.style.transform = `translateX(${-size * counter}px)`;
});

slider.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
        slider.style.transition = 'none';
        counter = images.length - 2;
        slider.style.transform = `translateX(${-size * counter}px)`;
    }

    if (images[counter].id === 'firstClone') {
        slider.style.transition = 'none';
        counter = images.length - counter;
        slider.style.transform = `translateX(${-size * counter}px)`;
    }
});
