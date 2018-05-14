const button = document.querySelector('button.greeting');

function changeText(ev) {
    //const paragraph = document.querySelector('p.greeting');
    //paragraph.textContent = 'You done clicked';
    ev.target.textContent = 'Clickity click';
}

button.addEventListener('click', changeText);
