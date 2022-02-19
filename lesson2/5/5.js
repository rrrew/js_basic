'use strict'

/**
 * Функция складывает два числа
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function add(a, b) {
    return a + b;
}

/**
 * Функция вычитает два числа
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function subtract(a, b) {
    return a - b;
}

/**
 * Функция умножает два числа
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function multiply(a, b) {
    return a * b;
}

/**
 * Функция делит два числа
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function divide(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return add(arg1, arg2);
        case "-":
            return subtract(arg1, arg2);
        case "*":
            return multiply(arg1, arg2);
        case "/":
            return divide(arg1, arg2);
        default:
            alert('Операция не может быть выполнена');
    }
}

console.log(mathOperation(6, 3, "+"))