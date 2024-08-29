const h2Element = document.querySelector('.h2');
let dots = 0;

setInterval(() => {
    if (dots < 3) {
        h2Element.textContent += '.';
        dots++;
    } else {
        h2Element.textContent = 'Full Stack Developer in Progress';
        dots = 0;
    }
}, 500);