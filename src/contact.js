export default function loadContact() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');

    const hearFromYou = document.createElement('div');
    hearFromYou.innerHTML = '<p> We would love to hear from you!  Whether you have a question, want to place a special order,' +
        'or simply wish to share your experience with us, we’re here to help.</p>';
    hearFromYou.classList.add('hear-from-you');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info')

    const contactBlock1 = document.createElement('div');
    contactBlock1.classList.add('contact-block');

    const ourLocation = document.createElement('div');
    ourLocation.innerHTML = '<p>Our Location</p>';
    ourLocation.classList.add('contact-title');
    const locationDescription = document.createElement('div');
    locationDescription.innerHTML = '<p>La Bella Vita Pizzeria 123 Gourmet Avenue, New York, NY 10001</p>'
    locationDescription.classList.add('contact-description');

    contactBlock1.appendChild(ourLocation);
    contactBlock1.appendChild(locationDescription);
    const contactBlock2 = document.createElement('div');
    contactBlock2.classList.add('contact-block');

    const openingHours = document.createElement('div');
    openingHours.innerHTML = '<p>Opening Hours</p>';
    openingHours.classList.add('contact-title');

    contactBlock2.appendChild(openingHours);

    const mondayThursday = document.createElement('div');
    mondayThursday.innerHTML = '<p><strong>Monday – Thursday:</strong> 11:00 AM – 10:00 PM</p>';
    mondayThursday.classList.add('contact-description');

    contactBlock2.appendChild(mondayThursday);

    const fridaySaturday = document.createElement('div');
    fridaySaturday.innerHTML = '<p><strong>Friday – Saturday:</strong> 11:00 AM – 11:30 PM</p>';
    fridaySaturday.classList.add('contact-description');

    contactBlock2.appendChild(fridaySaturday);

    const sunday = document.createElement('div');
    sunday.innerHTML = '<p><strong>Sunday:</strong> 12:00 PM – 9:00 PM</p>'
    sunday.classList.add('contact-description');

    contactBlock2.appendChild(sunday);




    const contactBlock3 = document.createElement('div');
    contactBlock3.classList.add('contact-block');

    const giveUsACall = document.createElement('div');
    giveUsACall.innerHTML= '<p>Give Us a Call</p>'
    giveUsACall.classList.add('contact-title');

    contactBlock3.appendChild(giveUsACall);

    const reservationsAndOrders = document.createElement('div');
    reservationsAndOrders.innerHTML = '<p> <strong> Reservations & Orders: </strong> (555) 123-4567</p>';
    reservationsAndOrders.classList.add('contact-description');

    contactBlock3.appendChild(reservationsAndOrders);

    const cateringAndEvents = document.createElement('div');
    cateringAndEvents.innerHTML = '<p><strong> Catering & Private Events:</strong>  (555) 987-6543</p>';
    cateringAndEvents.classList.add('contact-description');

    contactBlock3.appendChild(cateringAndEvents);

    contactInfo.appendChild(contactBlock1);
    contactInfo.appendChild(contactBlock2);
    contactInfo.appendChild(contactBlock3);

    contactDiv.appendChild(hearFromYou);
    contactDiv.appendChild(contactInfo);
    return contactDiv;
}