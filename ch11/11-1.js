// 예제 1
/**
 * BAD:
 * - 함수에서 두 가지 일을 하고 있다.
 *
 * SOLUTION:
 * - 함수를 쪼갠다.
 * */
function getTotalOutstanding() {
  return customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
}

function sendBill() {
  // bill을 보냄
}

// 예제 2
/**
 * BAD:
 * - 함수에서 두 가지 일을 하고 있다.
 *  - 1) 악당을 찾는 일
 *  - 2) 알람을 끄는 일
 *
 *  SOLUTION:
 *  - 찾는 일을 분리한다.(질의함수 분리)
 * */
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}

function findMiscreant(people) {
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
  return '';
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
