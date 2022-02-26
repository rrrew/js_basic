'use strict'

function transformToObject(value) {
    if (!Number.isInteger(value) || value < 0 || value > 999) {
        console.log('Это НЕ целое число от 0 до 999');
        return {};
    }

    return {
        units: value % 10,
        tens: Math.floor((value / 10) % 10),
        hundreds: Math.floor(value / 100),
    }
}

console.log(transformToObject(Number(prompt('Введите целое число от 0 до 999'))))