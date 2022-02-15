'use strict'

let array = ['x'];

for (let i = 0; i < 20; i++) {
    console.log(array.join(''));
    array.push('x');
}