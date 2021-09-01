// ЗАДАНИЕ 4.
// Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.

const arr = [1, 2, 3];

arr.__proto__.append = function (argument) {
  this.splice(0, 0, argument);
};

arr.append(0);

console.log(arr);