// 예제 1
/**
 * BAD:
 * - 동일한 로직이 반복된다.
 *
 * SOLUTION:
 * - '얼마만큼'을 매개변수로 받는다.
 * */
function raise(person, factor) {
  person.salary = person.salary.multiply(1 + factor);
}

// 예제 2
/**
 * BAD:
 * - Band가 반복되고 있다.
 *
 * SOLUTION:
 * - 범위를 매개변수로 받아 해결한다.
 *
 * TIPS:
 * - 이때 unit test가 존재한다면 안전하게 리팩토링할 수 있다.
 * */
export function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount =
    withinBand(usage, 0, 100) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function usd(value) {
  return {
    currency: '$',
    currencyName: 'USD',
    value: value,
  };
}
