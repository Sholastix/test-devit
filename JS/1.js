// ЗАДАНИЕ 1. 
// Напишите функцию cloneDeep таким образом, чтобы она была способна клонировать переданный как параметр объект.

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [{ "name": "Vasya", "email": "vasya@example.com", "age": 20, "skills": { "php": 0, "js": -1, "madness": 10, "rage": 10 } }, { "name": "Dima", "email": "dima@example.com", "age": 34, "skills": { "php": 5, "js": 7, "madness": 3, "rage": 2 } }, { "name": "Colya", "email": "colya@example.com", "age": 46, "skills": { "php": 8, "js": -2, "madness": 1, "rage": 4 } }, { "name": "Misha", "email": "misha@example.com", "age": 16, "skills": { "php": 6, "js": 6, "madness": 5, "rage": 2 } }, { "name": "Ashan", "email": "ashan@example.com", "age": 99, "skills": { "php": 0, "js": 10, "madness": 10, "rage": 1 } }, { "name": "Rafshan", "email": "rafshan@example.com", "age": 11, "skills": { "php": 0, "js": 0, "madness": 0, "rage": 10 } }]
let testData4 = [{ "name": "Vasya", "email": "vasya@example.com", "age": 20 }, { "name": "Dima", "email": "dima@example.com", "age": 34 }, { "name": "Colya", "email": "colya@example.com", "age": 46 }, { "name": "Misha", "email": "misha@example.com", "age": 16 }, { "name": "Ashan", "email": "ashan@example.com", "age": 99 }, { "name": "Rafshan", "email": "rafshan@example.com", "age": 11 }, 1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [[[[1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [{ "name": "Rafshan", "email": "rafshan@example.com", "age": 11 }]]]]]]

// В данном задании упомянуто имя "cloneDeep" - следовательно, как я понимаю, речь идет о глубоком клонировании. Но на всякий случай запишу и методы поверхностного.


///// ГЛУБОКОЕ КЛОНИРОВАНИЕ /////

// ВАРИАНТ 1 - сериализация/десериализация:
function cloneDeep(value) {
  try {
    const flatArray = value.flat(Infinity); // Для массивов с вложенными подмассивами сначала "поднимем" элементы методом .flat().
    const cloneDeep = JSON.parse(JSON.stringify(flatArray));
    return cloneDeep;
  } catch (err) {
    console.error(err);
  };
};

let result = cloneDeep(testData);
let result2 = cloneDeep(testData2);
let result3 = cloneDeep(testData3);
let result4 = cloneDeep(testData4);

console.log('DATA_FROM_RESULT:', result);
console.log('DATA_FROM_RESULT_2:', result2);
console.log('DATA_FROM_RESULT_3:', result3);
console.log('DATA_FROM_RESULT_4:', result4);


// ВАРИАНТ 2 - использовать метод "_.cloneDeep()" из lodash и это будет наилучший вариант.



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///// ПОВЕРХНОСТНОЕ КЛОНИРОВАНИЕ /////

// // ВАРИАНТ 1 - применим SPREAD-оператор:
// function cloneDeep(value) {
//   try {
//     const flatArray = value.flat(Infinity); // Для массивов с вложенными подмассивами сначала "поднимем" элементы методом .flat().
//     const cloneDeep = [...flatArray];
//     return cloneDeep;
//   } catch (err) {
//     console.error(err);
//   };
// };

// let result = cloneDeep(testData);
// let result2 = cloneDeep(testData2);
// let result3 = cloneDeep(testData3);
// let result4 = cloneDeep(testData4);

// console.log('DATA_FROM_RESULT:', result);
// console.log('DATA_FROM_RESULT_2:', result2);
// console.log('DATA_FROM_RESULT_3:', result3);
// console.log('DATA_FROM_RESULT_4:', result4);


// // ВАРИАНТ 2 - применим метод "Object.assign()":
// function cloneDeep(value) {
//   try {
//     const flatArray = value.flat(Infinity); // Для массивов с вложенными подмассивами сначала "поднимем" элементы методом .flat().
//     const cloneDeep = Object.assign([], flatArray);
//     return cloneDeep;
//   } catch (err) {
//     console.error(err);
//   };
// };

// let result = cloneDeep(testData);
// let result2 = cloneDeep(testData2);
// let result3 = cloneDeep(testData3);
// let result4 = cloneDeep(testData4);

// console.log('DATA_FROM_RESULT:', result);
// console.log('DATA_FROM_RESULT_2:', result2);
// console.log('DATA_FROM_RESULT_3:', result3);
// console.log('DATA_FROM_RESULT_4:', result4);