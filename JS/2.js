// ЗАДАНИЕ 2. 
// Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.

const arrays = [[1, 2, 3], [4, 5], [6]];

const newArr = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(newArr);