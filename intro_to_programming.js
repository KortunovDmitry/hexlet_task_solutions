/*
Напишите функцию diff,
которая принимает два угла (integer),
каждый от 0 до 360,
и возвращает наименьшую разницу между ними.

diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;
*/
const diff = (first, second) => {
  if (first < 0 || second < 0 || first > 360 || second < 360) {
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
