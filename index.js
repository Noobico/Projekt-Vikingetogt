const storeElements = [
    {
        "title": "Shield",
        "price": 100,
        "image": "https://via.placeholder.com/150",
    },
    {
        "title": "Sword",
        "price": 200,
        "image": "https://via.placeholder.com/150",
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