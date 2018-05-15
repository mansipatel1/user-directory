//const button = document.querySelector('button.greeting');
//const heading = document.querySelector('#h2');


//function changeText(ev) {
    //const paragraph = document.querySelector('p.greeting');
    //paragraph.textContent = 'You done clicked';
    //ev.target.textContent = 'Clickity click';
   //heading.textContent = 'Changed User Directory';
//}

//const txtName = document.getElementById("txtName");
//const txtOutput = Document.getElementById("txtOutput");

//function changeName() {
  //  heading.textContent = txtName.value;
//}
//button.addEventListener('click', changeText);


const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const heading = document.querySelector("#users")
  const f = ev.target
  const userName = f.userName.value
  users.innerHTML += '<p> ' + userName +' </p>'

  f.userName.value = '';
}

form.addEventListener('submit', handleSubmit)

