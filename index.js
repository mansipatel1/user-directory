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

 /* 
const nameItem = document.createElement('li');
    nameItem.textContent = `Name: ${userName}`;


const ageItem = document.createElement('li');
    ageItem.textContent = `Age: ${age}`;

const colorItem = document.createElement('li');
    colorItem.textContent = `Favorite Color: `;
   */

const form = document.querySelector('#userForm')


const renderColor = function (favoriteColor) {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = favoriteColor;
    colorDiv.style.width = '6rem';
    colorDiv.style.height = '3rem';
    return colorDiv;
}
/*
const renderListItem = function(call, value) {
    const item = document.createElement('li');
    item.textContent = `${call}: ${value}`;
    return item;
}
*/
/*
const renderList = function(userName, age, favoriteColor) {
    const list = document.createElement('ul');
    list.appendChild(renderListItem('Name', userName));
    list.appendChild(renderListItem('Age', age));
    list.appendChild(renderListItem('Favorite Color', ''));
    list.appendChild(renderColor(favoriteColor));
    return list;

}
*/
function renderListItem(label, value) {
    const item = document.createElement('li');

  const term = document.createElement('dt');
  term.textContent = label;

  const description = document.createElement('dd');

  try {
    description.appendChild(value);
  } catch(e) {
    description.textContent += value;
  }

  item.appendChild(term);
  item.appendChild(description);
  return item;
  }

  function renderList(data) {
    const list = document.createElement('dl')
    Object.keys(data).forEach(label => {
      const item = renderListItem(label, data[label])
      list.appendChild(item)
    })
    return list
  }

  const handleSubmit = function(ev) {
    ev.preventDefault()
    const form = ev.target
    const user = {
      'Name': form.userName.value,
      'Age': form.age.value,
      'Favorite Color': renderColor(form.favoriteColor.value),
    }
  
    const list = renderList(user)
    const users = document.querySelector('#users')
    users.appendChild(list)
  
    form.reset()
    form.userName.focus()

}
// const colorItem = renderListItem('Favorite Color', '');
// colorItem.appendChild(renderColor());

  //users.appendChild(renderList(userName, age, favoriteColor));


form.addEventListener('submit', handleSubmit)
