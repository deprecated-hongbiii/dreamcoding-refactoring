/**
 * BAD:
 * - 예상할 수 있는 상황에서 Error를 던짐
 * */
const values = [];
function getValueForPeriod(periodNumber) {
  if (periodNumber < 0 || periodNumber >= values.length) {
    return 0;
  }
  return values[periodNumber];

  // 또는 아래처럼도 가능
  // return values[periodNumber] ?? 0;
}

getValueForPeriod(-10);
