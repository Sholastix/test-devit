// ЗАДАНИЕ 12.
// Создать функцию, которая создает объект на основании двух представленных массивов, используя один как ключи, а другой - как значения. 
// Неподходящие ключи массивов должны быть исключены.

// Синтаксис: array_combine(keys: array, values: array): Object
// Пример: 
// let result = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

function array_combine(keys, values) {
  return keys.reduce((accumulator, currentValue, index) => {
    if (typeof currentValue === 'boolean') {
      return accumulator;
    }
    return Object.assign(accumulator, { [currentValue]: values[index] });
  }, {});
}

let result = array_combine(testData, testData2)   // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}

console.log(result);