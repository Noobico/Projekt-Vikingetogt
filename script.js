document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');

    const storeElements = [
        {
            "title": "Shield",
            "price": 100,
            "image": "https://via.placeholder.com/150",
            "description": "A sturdy shield for protection."
        },
        {
            "title": "Sword",
            "price": 200,
            "image": "https://via.placeholder.com/150",
            "description": "A sharp sword for battle."
        }
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