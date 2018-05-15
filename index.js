const button = document.querySelector('button.greeting');
const heading = document.querySelector('#h2');

function changeText(ev) {
    //const paragraph = document.querySelector('p.greeting');
    //paragraph.textContent = 'You done clicked';
    ev.target.textContent = 'Clickity click';
   heading.textContent = 'Changed User Directory';

}

button.addEventListener('click', changeText);
