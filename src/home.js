import pizzaImage from './mainpizza.jpg';
import waiterImage from './waiter.jpg';
import review1Image from './review1.jpg';
import review2Image from './review2.jpg';
import review3Image from './review3.jpg';

export default function loadHome() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');

    const firstLine = document.createElement('div');
    firstLine.innerHTML = '<h1>Where every slice tells a story.</h1>';
    firstLine.classList.add('first-line');

    const welcomingContainer = document.createElement('div');
    welcomingContainer.classList.add('welcoming-container');

    // Section 1
    const section1 = document.createElement('div');
    section1.classList.add('text-image-container');

    const welcomingText1 = document.createElement('div');
    welcomingText1.innerHTML = '<p>We deliver only the best pizza.<br>And we would love to share it with you.</p>';
    welcomingText1.classList.add('welcoming-text');

    const pizzaImg = document.createElement('img');
    pizzaImg.src = pizzaImage;
    pizzaImg.alt = 'Pizza';
    pizzaImg.classList.add('welcoming-img');

    section1.appendChild(welcomingText1);
    section1.appendChild(pizzaImg);

    // Section 2
    const section2 = document.createElement('div');
    section2.classList.add('text-image-container');

    const welcomingText2 = document.createElement('div');
    welcomingText2.innerHTML = '<p>Come visit us and enjoy the best service.</p>';
    welcomingText2.classList.add('welcoming-text');

    const waiterImg = document.createElement('img');
    waiterImg.src = waiterImage;
    waiterImg.alt = 'Waiter';
    waiterImg.classList.add('welcoming-img');

    section2.appendChild(welcomingText2);
    section2.appendChild(waiterImg);

    // Append everything properly
    welcomingContainer.appendChild(section1);
    welcomingContainer.appendChild(section2);

    // Reviews Section
    const section3 = document.createElement('div');
    section3.classList.add('review-text-image');

    // Review 1
    const review1 = document.createElement('div');
    review1.classList.add('review');

    const review1Text = document.createElement('div');
    review1Text.innerHTML = '<p>The best pizza of my life!</p>';
    review1Text.classList.add('review-text');

    const review1Img = document.createElement('img');
    review1Img.src = review1Image;
    review1Img.alt = 'young short haired woman';
    review1Img.classList.add('review-image');

    review1.appendChild(review1Text);
    review1.appendChild(review1Img);
    section3.appendChild(review1);

    // Review 2 (Fixed the issues)
    const review2 = document.createElement('div');
    review2.classList.add('review'); // Fixed: Assigned class to review2, not review1

    const review2Text = document.createElement('div');
    review2Text.innerHTML = '<p>The waiters made me feel at home.</p>'; // Fixed: Creating new text element
    review2Text.classList.add('review-text');

    const review2Img = document.createElement('img');
    review2Img.src = review2Image; // Fixed: Using correct variable
    review2Img.alt = 'young brown haired woman';
    review2Img.classList.add('review-image');

    review2.appendChild(review2Text);
    review2.appendChild(review2Img);
    section3.appendChild(review2);

    const review3 = document.createElement('div');
    review3.classList.add('review');

    const review3Text = document.createElement('div');
    review3Text.innerHTML = '<p>The views were amazing!</p>';
    review3Text.classList.add('review-text')

    const review3Img = document.createElement('img');
    review3Img.src = review3Image;
    review3Img.alt = 'adult woman';
    review3Img.classList.add('review-image');

    review3.appendChild(review3Text);
    review3.appendChild(review3Img);
    section3.appendChild(review3)


    homeDiv.appendChild(firstLine);
    homeDiv.appendChild(welcomingContainer);
    homeDiv.appendChild(section3); // Fixed: Append the whole review section

    return homeDiv;
}
