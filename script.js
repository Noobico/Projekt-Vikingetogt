document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');

    const storeElements = [
        {
            "title": "Shield",
            "price": 5,
            "image": "/shop/shield.svg",
        },
        {
            "title": "Axe",
            "price": 3,
            "image": "/shop/axe.png",
        },
        {
            "title": "Small Ring",
            "price": 1,
            "image": "/shop/small-ring.png",
        },
        {
            "title": "Medium Ring",
            "price": 2,
            "image": "/shop/medium-ring.png",
        },
        {
            "title": "Large Ring",
            "price": 3,
            "image": "/shop/large-ring.png",
        },
        {
            "title": "Mjölnir",
            "price": 5,
            "image": "/shop/mjölnir.png",
        },
        {
            "title": "Viking Bracelet",
            "price": 4,
            "image": "/shop/viking-bracelet.png",
        },
        {
            "title": "Yggdrasil Earrings",
            "price": 4,
            "image": "/shop/yggdrasil-earrings.png",
        },
    ];

    let output = '';
    storeElements.forEach(product => {
        output += `
        <div class="product">
            <img src="${product.image}" />
            <h2>${product.title}</h2>
            <span>${product.price} gold</span>
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