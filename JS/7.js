// ЗАДАНИЕ 7.
// Сделать функцию поиска значений в массиве. 

// Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
// Пример: 
// let result = array_find(testData, '/^raf.*/i') // ["Rafshan"]
// let result2 = array_find(testData, "Rafshan") // ["Rafshan"]

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

const array_find = (array, search) => {
  try {
    let regexp = /^\/.*\//;
    let res = null;
    if (regexp.test(search)) {
      res = array.filter((el) => {
        return search.test(el);
      });
    } else {
      res = array.filter((el) => {
        if (el === search) {
          return true;
        }
        return false;
      });
    }

    return res;
  } catch (err) {
    console.error(err);
  };
};

let result = array_find(testData, /^raf.*/i);   // ["Rafshan"]
let result2 = array_find(testData, 'Rafshan');   // ["Rafshan"]

console.log('DATA_FROM_RESULT:', result);
console.log('DATA_FROM_RESULT_2:', result);