'use strict'

let a = 0;

while (a < 11) {
    if (a == 0) {
        console.log(a + ' - это ноль')
    } else if (a % 2 == 1) {
        console.log(a + ' - это нечетное число')
    } else if (a % 2 == 0) {
        console.log(a + ' - это четное число')
    }
    a++;
}