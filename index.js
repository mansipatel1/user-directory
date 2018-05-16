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

 /* 
const nameItem = document.createElement('li');
    nameItem.textContent = `Name: ${userName}`;


const ageItem = document.createElement('li');
    ageItem.textContent = `Age: ${age}`;

const colorItem = document.createElement('li');
    colorItem.textContent = `Favorite Color: `;
   */
  
const colorItem = renderListItem('Favorite Color', '');
colorItem.appendChild(renderColor());

/*
const list = document.createElement('ul')
  list.appendChild(renderListItem('Name', userName));
  list.appendChild(renderListItem('Age', age));
  list.appendChild(renderListItem('Favorite Color', ''));
  list.appendChild(renderColor(favoriteColor));
*/
  users.appendChild(renderList(userName, age, favoriteColor));

  f.reset()
  f.userName.focus()
}

const renderColor = function (favoriteColor) {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = favoriteColor;
    colorDiv.style.width = '6rem';
    colorDiv.style.height = '3rem';
    return colorDiv;
}

const renderListItem = function(call, value) {
    const item = document.createElement('li');
    item.textContent = `${call}: ${value}`;
    return item;
}

const renderList = function(userName, age, favoriteColor) {
    const list = document.createElement('ul');
    list.appendChild(renderListItem('Name', userName));
    list.appendChild(renderListItem('Age', age));
    list.appendChild(renderListItem('Favorite Color', ''));
    list.appendChild(renderColor(favoriteColor));
    return list;
  

}

form.addEventListener('submit', handleSubmit)
