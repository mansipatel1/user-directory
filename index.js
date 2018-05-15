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
  ev.preventDefault();
  const users = document.querySelector('#users');
  const f = ev.target;
  const userName = f.userName.value;
  const age = f.age.value;
  const favoriteColor = f.favoriteColor.value;
  //list.style.backgroundColor = favoriteColor;

  const list = document.createElement('ul')
  
  const nameItem = document.createElement('li');
    nameItem.textContent = `Name: ${userName}`;
    list.appendChild(nameItem);

  const ageItem = document.createElement('li');
    ageItem.textContent = `Age: ${age}`;
    list.appendChild(ageItem);

  
  users.appendChild(list);

  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)
