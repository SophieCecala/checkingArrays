//task 1
const arr1 = [-1, -5, 4, 3];

let result1 = arr1.some(function (elem) {
    return elem > 0;
});

console.log(result1);

//task 2
const arr2 = [-1, -5, 2, 7, 4];

let result2 = arr2.some(function (elem) {
    return elem * arr2.indexOf(elem) > 30
});

console.log(result2);

//task 3
const arr3 = [-1, -5, 2, 7, 4];

let result3 = arr3.some(function (elem) {
    if (elem > 0) {
        return true;
    } else {
        return false;
    }
});

console.log(result3);

//task 4
const arr4 = [-1, -5, 2, 7, 4];

let result4 = arr4.some(function (elem) {
    if (elem * arr4.indexOf(elem) > 30) {
        return true;
    } else {
        return false
    }
});

console.log(result4);

//task5

const arr5 = [-1, -5, 2, 7, 4];
let sum1 = 0;

arr5.forEach(function (elem) {
    sum1 += elem ^ 2;
});

console.log('sum', sum1);

//task8.1

const arr8 = [-1, -5, 2, 7, 4];

let result8 = arr8.filter(function (elem) {
    if (elem > 0) {
        return true;
    } else {
        return false;
    }
});

console.log('arr8', result8);

//task8.2

const arr9 = [-1, -5, 2, 7, 4];

let result9 = arr9.filter(function (elem) {
    if (elem < 0) {
        return true;
    } else {
        return false;
    }
});

console.log('arr9', result9);

//task8.3

const arr10 = [-1, -5, 2, 7, 4];

let result10 = arr10.filter(function (elem) {
    if (elem > 0 || elem < 10) {
        return true;
    } else {
        return false;
    }
});

console.log('arr10', result10);

//task8.4

const arr11 = ['cat', 'corner', 'peach', 'competition'];

let result11 = arr11.filter(function (elem) {
    if (elem.length > 5) {
        return arr11
    }
});

console.log('arr11', result11);


//task8.5
const arr12 = [-1, -5, 2, 7, 4, 5, 6];

let result12 = arr12.filter(function (elem) {
    if (elem * arr12.indexOf(elem) < 30) {
        return arr12
    }
});

console.log('arr12', result12);

//task8.6
const arr13 = [1, 2, [3, 4], 5, [6, 7]];
const newArr13 = arr13.filter(item => !Array.isArray(item));


console.log('arr13', newArr13);

//task8.7
const arr14 = [-1, -5, 2, 7, 4, 5, 6];
let fitered = arr14.filter(elem => elem < 0 );
console.log('arr14', fitered.length);