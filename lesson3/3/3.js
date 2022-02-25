'use strict'

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

function discount(product) {
    product.price = product.price - product.price * 0.15;
}

products.forEach(discount);

console.log(products);