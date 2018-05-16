# User Directory


##Homework 

-Create a new function called `rendorColor` that returns a `div` element with the color 

--> colorItem.appendChild(rendorColor())
call the function to colorItem

Bonus: 
create a new function called `renderListItem`
to return the list item
-use it to create the list of elements for each stat

MegaBonus:
-create a new function called renderList 
-use it to creat the list for each person's stats
-call `renderListItem` from `renderList`, not directly from `handleSubmit`;


const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = favoriteColor;
    colorDiv.style.width = '6rem';
    colorDiv.style.height = '3rem';
    colorItem.appendChild(colorDiv);


const renderListItem = function(call, value) {
    const item = document.createElement('li');
    item.textContent = `${call}: ${value}`;
    return item;
}



