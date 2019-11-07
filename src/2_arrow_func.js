// // old syntax
// function sum(a, b) {
//     return a + b
// }
//
// function square(a) {
//     return a ** 2
// }

// // arrow functions
// const sum = (a, b) => (a + b);
// console.log(sum(2, 3));
// const square = a => a ** 2;
// console.log(square(3));

// setTimeout(() => console.log('After 1 sec'), 1000);

// // Context
// function log() {
//     console.log('classic func: ', this)
// }
//
// const arrowLog = () => console.log('arrow: ' + this);
//
// const person = {
//     name: 'Igor',
//     age: 25,
//     log: log,
//     arrowLog: arrowLog,
//     delayLog: function () {
//         // setTimeout вызывается у Window
//         window.setTimeout(function () {
//             console.log('delayLog: ' + this.name + ' ' + this.age)
//         }, 500)
//     },
//     delayArrowLog: function () {
//         setTimeout(() => console.log('delayArrowLog: ' + this.name +
//             ' ' + this.age), 500)
//     },
//     delayMethodArrowLog: () => {
//         setTimeout(() => console.log('delayMethodArrowLog: ' + this.name +
//             ' ' + this.age), 500)
//     },
//
// };
//
// person.log(); // person
// person.arrowLog(); // object Window
// person.delayLog(); // undefined
// person.delayArrowLog(); // Igor 25
// person.delayMethodArrowLog(); // undefined

