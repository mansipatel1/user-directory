const button = document.querySelector('button.greeting');
const heading = document.querySelector('#h2');

function changeText(ev) {
    //const paragraph = document.querySelector('p.greeting');
    //paragraph.textContent = 'You done clicked';
    ev.target.textContent = 'Clickity click';
   heading.textContent = 'Changed User Directory';

}

const txtName = document.getElementById("txtName");
const txtOutput = Document.getElementById("txtOutput");

function changeName() {
    heading.textContent = txtName.value;
}
button.addEventListener('click', changeText);

