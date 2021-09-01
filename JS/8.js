// ЗАДАНИЕ 8.
// Сделать функцию, которая обрезает массив до указанного значения.

// Пример: 
// let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
// let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
// let result3 = array_skip_until(testData, "asd") // []

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

function array_skip_until(array, value) {
  try {
    if (array.indexOf(value) !== -1) {
      const index = array.indexOf(value);
      const newArr = array.slice(index); // Также можно использовать метод "splice", если нам нужно изменить исходный массив, вырезав из него указанную часть.
      return newArr;
    } else {
      return [];
    }
  } catch (err) {
    console.error(err);
  };
};

let result = array_skip_until(testData, 2);
let result2 = array_skip_until(testData, 'Rafshan');
let result3 = array_skip_until(testData, 'asd');

console.log('DATA_FROM_RESULT:', result);
console.log('DATA_FROM_RESULT_2:', result2);
console.log('DATA_FROM_RESULT_3:', result3);