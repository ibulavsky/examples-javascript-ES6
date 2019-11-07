// function vaR() {
//     var age = 25;
//     console.log(age); // 25
//     age = 'Igor';
//     console.log(age); // Igor
//     (function () {
//         {
//             if (true) {
//                 var age = 42;
//             }
//             console.log(age); // 42
//         }
//     })();
//     console.log(age); // Igor, если не оборачивать в самовызыв. функцию, то "age is not defined"
// }
// // vaR();

// //в случае с использованием let/const переменная работаес с блочной облостью видимостью и функция не нужна
// {
//     let age = 25;
//     console.log(age); // 25
//     age = 'Igor';
//     console.log(age); // Igor
//     if (true) {
//         let age = 42;
//         console.log(age)
//     }
//     console.log(age); // Igor
// }

// // const
// {
//     const name = 'Igor';
//     console.log(name); // Igor
//     // name = 'Max';
//     console.log(name); // Assignment to constant variable.
//     const array = [1, 2, 3];
//     // array = [1, 2, 3, 4] // error
//     array.push(4)
//     console.log(array)
//     // для объектов такое же поведение
//     const obj = {
//         age: 25,
//     }
//     obj.name = "Igor";
//     console.log(obj);
// }

