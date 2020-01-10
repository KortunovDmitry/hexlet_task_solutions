/*
Напишите функцию diff,
которая принимает два угла (integer),
каждый от 0 до 360,
и возвращает наименьшую разницу между ними.

Примеры:
diff(0, 45) = 45;
diff(0, 180) = 180;
diff(0, 190) = 170;
diff(120, 280) = 160;
*/
exports.diff = (first, second) => {
  if (first < 0 || second < 0 || first > 360 || second > 360) {
    return NaN;
  }

  let diffFirst = first - second;
  let diffSecond = second - first;
  if (diffFirst < 0) {
    diffFirst += 360;
  } else if (diffSecond < 0) {
    diffSecond += 360;
  }

  return (diffFirst <= diffSecond) ? diffFirst : diffSecond;
};

/*
Создайте функцию isPerfect,
которая принимает число и возвращает true,
если оно совершенное, и false — в ином случае.

Совершенное число — положительное целое число,
равное сумме его положительных делителей
(не считая само число).
Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
*/
exports.isPerfect = (number) => {
  if (number <= 5) {
    return false;
  }

  let allDividerSum = 1;
  for (let divider = 2; divider <= number / 2; divider += 1) {
    if (number % divider === 0) {
      allDividerSum += divider;
    }
  }

  return (number === allDividerSum);
};

/*
Сумма квадратов первых десяти натуральных чисел это 1^2 + 2^2 + 3^2 + ... + 10^2 = 385.
Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)^2 = 552 = 3025.
Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference,
которая принимает аргумент n и возвращает
разницу между квадратом суммы и суммой
квадратов первых n натуральных чисел.
*/
exports.sumSquareDifference = (n) => {
  if (n <= 0) {
    return NaN;
  }

  let numberSum = 1;
  let squareNumberSum = 1;
  for (let number = 2; number <= n; number += 1) {
    numberSum += number;
    squareNumberSum += number ** 2;
  }

  return (numberSum ** 2) - squareNumberSum;
};
