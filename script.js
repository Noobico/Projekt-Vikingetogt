document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');

    const storeElements = [
        {
            "title": "Shield",
            "price": 5,
            "image": "/assets/skjold.svg",
        },
        {
            "title": "Small Ring",
            "price": 1,
            "image": "/assets/small-ring.svg",
        },
        {
            "title": "Medium Ring",
            "price": 2,
            "image": "/assets/medium-ring.svg",
        },
        {
            "title": "Large Ring",
            "price": 3,
            "image": "/assets/large-ring.svg",
        },
        {
            "title": "Thor's Hammer",
            "price": 5,
            "image": "/assets/thor-hammer.svg",
        },
        {
            "title": "Viking Bracelet",
            "price": 4,
            "image": "/assets/viking-bracelet.svg",
        },
        {
            "title": "Viking Ring",
            "price": 4,
            "image": "/assets/viking-ring.svg",
        },
        {
            "title": "Yggdrasil Earrings",
            "price": 4,
            "image": "/assets/yggdrasil-earrings.svg",
        },
    ];

    let output = '';
    storeElements.forEach(product => {
        output += `
        <div class="product">
            <img src="${product.image}" alt="${product.title}" />
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <span>${product.price}</span>
        </div>
        `;
    });

    const storeList = document.getElementById('storeList');
    if (storeList) {
        storeList.innerHTML = output;
    }

    const dropdownIcon = document.querySelector('.mobile-favicon');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    console.log(dropdownIcon); // Debugging line
    console.log(dropdownMenu); // Debugging line

    if (dropdownIcon && dropdownMenu) {
        dropdownIcon.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
        });
    } else {
        console.error('Dropdown icon or menu not found');
    }
});