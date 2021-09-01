// ЗАДАНИЕ 6.
// Написать функцию для выполнения параллельных вычислений без использования Promise.

const a = function (one, two) {
  return one + two;
};

const b = function () {
  return false;
};

// Вместо promise используем callback.
const parallel = ([arrFunc1, arrFunc2], callback) => {
  const res1 = arrFunc1[0](...arrFunc1[1]);
  const res2 = arrFunc2[0]();
  callback([res1, res2]);
};

parallel([[a, [1, 2]], [b]], function (results) {
  console.log(results); // [3, false]
});