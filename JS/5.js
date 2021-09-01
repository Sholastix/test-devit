// ЗАДАНИЕ 5.
// Выведите все элементы массива используя рекурсию.

const arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];

function recurseLog(arr) {
  try {
    // Запускаем цикл. Начинаем с последнего єлемента массива и отматываем по одному до первого включительно при помощи декремента. 
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
    };
  } catch (err) {
    console.error(err);
  };
};

recurseLog(arr);