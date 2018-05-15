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

  
const nameItem = document.createElement('li');
    nameItem.textContent = `Name: ${userName}`;


const ageItem = document.createElement('li');
    ageItem.textContent = `Age: ${age}`;

const colorItem = document.createElement('li');
    colorItem.textContent = `Favorite Color: `;

const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = favoriteColor;
    colorDiv.style.width = '6rem';
    colorDiv.style.height = '3rem';
    colorItem.appendChild(colorDiv);

const list = document.createElement('ul')
  list.appendChild(nameItem);
  list.appendChild(ageItem);
  list.appendChild(colorItem);

  users.appendChild(list);

  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)
