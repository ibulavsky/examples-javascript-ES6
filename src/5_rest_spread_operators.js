// Rest
{
// {
//     const average = (arr) => {
//         return arr.reduce((acc, i) => acc += i, 0) / arr.length
//     };
//     console.log(average([10, 20, 30, 40])); // 25
//     console.log(average(10, 20, 30, 40, 50)); //error
// }
// {
//     function average() {
//         return Array.from(arguments).reduce((acc, i) => acc += i, 0) / arguments.length
//     };
//     console.log(average([10, 20, 30, 40])); // NaN
//     console.log(average(10, 20, 30, 40, 50)); //30
// }
//
// {
//     function average(...args) {
//         return args.reduce((acc, i) => acc += i, 0) / args.length
//     };
//     console.log(average(10, 20, 30, 40)); // 25
//     console.log(average(10, 20, 30, 40, 50)); // 30
// }
// {
//     function average(length, ...args) {
//         return args.reduce((acc, i) => acc += i, 0) / length
//     };
//     console.log(average(10, 20, 30, 40)); // 9
//     console.log(average(10, 20, 30, 40, 50)); // 14
// }
}
// Spread
{
    // const array = [1, 2, 3, 4];
    // console.log(...array); // 1 2 3 4
    // console.log(Math.max(...array)); // 4
    // console.log(Math.min(...array)); // 1
    // const idArray = [0, ...array];
    // console.log(idArray); // [0, 1, 2, 3, 4]
}
// Destructuring
{

// const array = [1, undefined, 3, 4];
// // const a = array[0];
// // const b = array[1];
// // equals
// const [a, b = 25, ...c] = array;
// const [first, , ,fourth] = array;
// console.log(first, fourth);

//Objects
//     const person = {
//         name: 'Igor',
//         secondName: 'Bull',
//         age: 25,
//         introduce: function () {
//             console.log(`My name is ${this.name} ${this.secondName}! I'm ${this.age} years old.`)
//         }
//     };
    // // person.introduce();
    // const {name, secondName = "Father's", age, introduce} = person;
    // introduce.bind(person)();
    // console.log(secondName) // "Father's", if secondName in person undefined
    // const {name, ...rest} = person
    // console.log(name);
    // console.log(rest);
    //
    // const newPerson = {...person, name: 'Dima', gender: 'man'};
    // console.log(newPerson);
}



