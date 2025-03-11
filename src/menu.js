import margaritaPizzaImage from './margarita.jpg';
import pepperoniPizzaImage from './pepperoni.jpg';
import hawaiianPizzaImage from './hawaian.jpg';
import bbqChickenPizzaImage from './bbq-chicken.jpg';
import meatLoverPizzaImage from "./meat-lover.jpg";
import veggieSupremePizzaImage from "./veggie-supreme.jpg";
export default function loadMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');

    // Array of menu items
    const menuItems = [
        {
            title: "Margherita",
            description: "Tomato sauce, fresh mozzarella, fresh basil, and olive oil.",
            image: margaritaPizzaImage,
            alt: "Margherita Pizza"
        },
        {
            title: "Pepperoni",
            description: "Loaded with crispy pepperoni and mozzarella cheese.",
            image: pepperoniPizzaImage,
            alt: "Pepperoni Pizza"
        },
        {
            title: "Hawaiian",
            description: "Tomato sauce, mozzarella, ham and pineapple.",
            image: hawaiianPizzaImage,
            alt: "Hawaiian Pizza"
        },
        {
            title: "BBQ Chicken",
            description: "Grilled chicken, BBQ sauce, mozzarella, and red onions.",
            image: bbqChickenPizzaImage,
            alt: "BBQ Chicken Pizza",
        },
        {
            title: "Meat Lover",
            description: "Pepperoni, sausage, ham, bacon and ground beef",
            image: meatLoverPizzaImage,
            alt: "Meat Lover Pizza",
        },
        {
            Title: "Veggie Supreme",
            description: "Tomato sauce, mozzarella, mushrooms, bell peppers, onions, olives, and tomatoes.",
            image: veggieSupremePizzaImage,
            alt: "Veggie Supreme Pizza"
        }
    ];

    // Create a container for each menu item
    menuItems.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('menu-item');

        const foodTextImgContainer = document.createElement('div');
        foodTextImgContainer.classList.add('food-img-container');

        // Create text container
        const foodText = document.createElement('div');
        foodText.classList.add('food-text');

        // Create title element
        const foodTitle = document.createElement('div');
        foodTitle.classList.add('food-title');
        foodTitle.innerHTML = `<p>${item.title}</p>`;

        // Create description element
        const foodDescription = document.createElement('div');
        foodDescription.classList.add('food-description');
        foodDescription.innerHTML = `<p>${item.description}</p>`;

        // Append title and description to the text container
        foodText.appendChild(foodTitle);
        foodText.appendChild(foodDescription);

        // Create image element
        const foodImg = document.createElement('img');
        foodImg.classList.add('food-image');
        foodImg.src = item.image;
        foodImg.alt = item.alt;

        // Combine text and image in their container
        foodTextImgContainer.appendChild(foodText);
        foodTextImgContainer.appendChild(foodImg);

        // Add the item container to the main menu container
        itemContainer.appendChild(foodTextImgContainer);
        menuDiv.appendChild(itemContainer);
    });

    return menuDiv;
}
