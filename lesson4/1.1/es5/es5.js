'use strict'

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 0.25);
    console.log(this.price);
}

let product1 = new Product('shirt', 400);
product1.make25PercentDiscount();