export default function loadMenu(){
    const menuDiv =  document.createElement('div');
    menuDiv.classList.add('menu-div');

    const foodText = document.createElement('div');
    foodText.classList.add('food-text');

    const foodTitle1 = document.createElement('div');
    foodTitle1.innerHTML= '<p>Margherita</p>';
    foodTitle1.classList.add('food-title');

    const foodDescription1 = document.createElement('div');
    foodDescription1.innerHTML='<p>Tomato sauce, fresh mozzarella fresh basil, ' +
        'and olive oil.</p>';
    foodDescription1.classList.add('food-description');

    foodText.appendChild(foodTitle1);
    foodText.appendChild(foodDescription1);
    menuDiv.appendChild(foodText);

    return menuDiv
}