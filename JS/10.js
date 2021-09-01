// ЗАДАНИЕ 10.
// Сделать функцию, которая возвращает уникальные элементы массива.

// Синтаксис: array_unique(arr: array): any[]
// Пример:
// let result = array_unique(testData.concat(testData2)) // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

// ВАРИАНТ 1: спецколлекция Set + SPREAD.
function array_unique(value1, value2) {
  try {
    const newArr = [... new Set(value1.concat(value2))];
    return newArr;
  } catch (err) {
    console.error(err);
  };
};

let result = array_unique(testData, testData2);

console.log(result);


// // ВАРИАНТ 2: спецколлекция Set + метод "from".
// function array_unique(value1, value2) {
//   try {
//     const newArr = Array.from(new Set(value1.concat(value2)));
//     return newArr;
//   } catch (err) {
//     console.error(err);
//   };
// };

// let result = array_unique(testData, testData2);

// console.log(result);


// // ВАРИАНТ 3: сочетанием методов "filter" и "lastIndexOf" (а также "reverse" для поддержания порядка вывода значений).
// function array_unique(value1, value2) {
//   try {
//     newArr = value1.concat(value2).reverse().filter((element, index, array) => {
//       return array.lastIndexOf(element) === index;
//     }).reverse();
//     return newArr;
//   } catch (err) {
//     console.error(err);
//   };
// };

// let result = array_unique(testData, testData2);

// console.log(result);