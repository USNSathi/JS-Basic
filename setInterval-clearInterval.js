/*
// setInterval

console.log('First');
setInterval(() => {
    console.log('Third');
}, 3000);
console.log('Second');
*/

/*
console.log('First');
let seconds = 0;
setInterval(() => {
    seconds++;
    console.log(seconds);
}, 1000);
console.log('Second');
*/

/*
// clearInterval = stop setInterval

console.log('First');
let seconds = 0;
const timeId = setInterval(() => {
    seconds++;
    console.log(seconds);
    if (seconds > 20) {
        clearInterval(timeId);
    }
}, 1000);
console.log('Second');
*/

/*
console.log('First');
let seconds = 0;
const timeId = setInterval(() => {
    console.log(seconds++);
    if (seconds > 20) {
        clearInterval(timeId);
    }
}, 1000);
console.log('Second');
*/

console.log('First');
let seconds = 0;
const timeId = setInterval(() => {
    console.log(++seconds);
    if (seconds > 20) {
        clearInterval(timeId);
    }
}, 1000);
console.log('Second');