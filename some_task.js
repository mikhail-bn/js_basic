const A = prompt('Введите число А');
const B = prompt('Введите число B');
const C = prompt('Введите число C');
console.log('Введены числа А В С. Мы найдем минимальное из них');

let minVal = 0;
const minValue = (A, B, C) => {
    let minVal = A;
    if (B < minVal) {
        minVal = B
    } else if (C < minVal) {
        minVal = C
    }
    return minVal
}

const result = minValue(A, B, C);
console.log(`Минимальное значение ${result}`);
alert(`Минимальное значение ${result}`);