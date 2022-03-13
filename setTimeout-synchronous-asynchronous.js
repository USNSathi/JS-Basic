/*
// Synchronous

function doSomething() {
    console.log('I am codding JavaScript');
}
console.log('First : Ami Sobar Age');
console.log('Second : I am the second person');
doSomething();
console.log('Third : Ami 3 number baccha');
console.log('Fourth : Ami ek hali purno korsy');
*/

/*
// Asynchronous
// setTimeout

function doSomething() {
    console.log('I am codding JavaScript');
}
console.log('First : Ami Sobar Age');
console.log('Second : I am the second person');
setTimeout(doSomething, 5000);
console.log('Third : Ami 3 number baccha');
console.log('Fourth : Ami ek hali purno korsy');
*/

/*
// Asyncronous
// setTimeout(function)

function doSomething() {
    console.log('I am codding JavaScript');
}
console.log('First : Ami Sobar Age');
console.log('Second : I am the second person');
setTimeout(function () {
    console.log('Third');
}, 5000);
console.log('Third : Ami 3 number baccha');
console.log('Fourth : Ami ek hali purno korsy');
*/

/*
// Asyncronous
// setTimeout(=> function)

function doSomething() {
    console.log('I am codding JavaScript');
}
console.log('First : Ami Sobar Age');
console.log('Second : I am the second person');
setTimeout(() => {
    console.log('Third');
}, 4000);
console.log('Third : Ami 3 number baccha');
console.log('Fourth : Ami ek hali purno korsy');
*/

// Asyncronous
// Time setting with setTimeout

function doSomething() {
    console.log('I am codding JavaScript');
}
console.log('First : Ami Sobar Age');
console.log('Second : I am the second person');
setTimeout(function () {
    console.log('Third');
}, 5000);
setTimeout(() => {
    console.log('Fourth');
}, 4000);
console.log('Third : Ami 3 number baccha');
console.log('Fourth : Ami ek hali purno korsy');