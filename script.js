document.addEventListener('DOMContentLoaded', () => {
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

    document.getElementById('storeList').innerHTML = output;

    const dropdownIcon = document.querySelector('.mobile-favicon');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownIcon.addEventListener('click', () => {
        dropdownMenu.classList.toggle('active');
    });
});