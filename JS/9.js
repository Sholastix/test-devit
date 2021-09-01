// ЗАДАНИЕ 9.
// Создать функцию, которая нормализует данные в массиве, исключая или преобразуя неподходящие.

// Доступные шаблоны: 
// 'string' => строки, 
// 'number' => числа, 
// 'int' => целые числа, 
// 'float' => числа с плавающей точкой, 
// 'bool' => true | false, 
// 'function' => функция, 
// 'array' => массив, 
// Object => объект {name: 'string'}
// Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]
// Пример: 
// let result = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result3 = array_normalize(testData4, {age: 'float'}) // []
// let result4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

let testData4 = [{ "name": "Vasya", "email": "vasya@example.com", "age": 20 }, { "name": "Dima", "email": "dima@example.com", "age": 34 }, { "name": "Colya", "email": "colya@example.com", "age": 46 }, { "name": "Misha", "email": "misha@example.com", "age": 16 }, { "name": "Ashan", "email": "ashan@example.com", "age": 99 }, { "name": "Rafshan", "email": "rafshan@example.com", "age": 11 }, 1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [[[[1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [{ "name": "Rafshan", "email": "rafshan@example.com", "age": 11 }]]]]]]

function array_normalize(arr, shema, transform) {
  let res = [];

  if (typeof shema === 'object' && shema !== null) {
    const keys = Object.keys(shema);
    const key = keys[0];

    res = arr.reduce((prev, el) => {
      if (typeof el === 'object' && el !== null && el.hasOwnProperty(key)) {
        const val = array_normalize([el[key]], shema[key], transform);
        if (val.length === 1) {
          return prev.concat([{ [key]: val[0] }]);
        }
      }

      return prev;
    }, []);

    return res;
  }

  switch (shema) {
    case 'string':
      if (transform) {
        res = arr.filter(el => typeof el === 'string' || typeof el === 'number')
          .map(el => String(el));
      } else {
        res = arr.filter(el => typeof el === 'string');
      }

      return res;

    case 'number':
      if (transform) {
        arr.forEach(el => {
          const num = Number(el);
          if (!isNaN(num)) {
            res.push(num);
          }
        });
      } else {
        res = arr.filter(el => typeof el === 'number');
      }

      return res;

    case 'int':
      if (transform) {
        arr.forEach(el => {
          const num = Number(el);
          if (!isNaN(num)) {
            res.push(parseInt(num));
          }
        });
      } else {
        res = arr.filter(el => Number.isInteger(el));
      }

      return res;

    case 'float':
      if (transform) {
        arr.forEach(el => {
          const num = Number(el);
          if (!isNaN(num)) {
            res.push(parseFloat(num));
          }
        });
      } else {
        res = arr.filter(el => typeof el === 'number' && !Number.isInteger(el))
      }

      return res;

    case 'bool':
      if (transform) {
        arr.forEach(el => {
          res.push(Boolean(el));
        });
      } else {
        res = arr.filter(el => typeof el === 'boolean');
      }

      return res;

    case 'function':
      res = arr.filter(el => typeof el === 'function');

      return res;

    case 'array':
      res = arr.filter(el => Array.isArray(el));

      return res;
    default:
      alert(`Sorry, we are not support ${shema} type.`);
  }
};

let result = array_normalize(testData4, 'string');
let result2 = array_normalize(testData4, 'string', true);
let result3 = array_normalize(testData4, {age: 'float'});
let result4 = array_normalize(testData4, {age: 'float'}, true);

console.log('DATA_FROM_RESULT:', result);
console.log('DATA_FROM_RESULT_2:', result2);
console.log('DATA_FROM_RESULT_3:', result3);
console.log('DATA_FROM_RESULT_4:', result4);