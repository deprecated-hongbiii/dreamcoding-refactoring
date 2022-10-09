// 예제 1
/**
 * BAD:
 * - 조건에 따라 다른 일을 하고 있다.
 *
 * SOLUTION:
 * - 두 개의 함수로 분리한다.
 * - 플래그 변수(value)는 가능하면 사용하지 않는다.
 * */
function setWidth(value) {
  this._width = value;
}

function setHeight(value) {
  this._width = value;
}

// 예제 2
/**
 * BAD:
 * - 플래그(isPremium)를 이용해서 함수를 제어하고 있다.
 *
 * SOLUTION:
 * - 일반예약과 프리미엄예약을 나눈다.
 *
 * QUESTION:
 * - 중복 코드가 발생할 것 같은데 나눠야 하나요?
 *  - 외부에 노출되는 함수는 분리하고, 실제로 재사용되는 로직은 private 함수로 정의한다.
 * */
class Concert {
  regularBook(customer) {}
  premiumBook(customer) {}
  #book(customer, isPremium) {}
}

// 예제 3
/**
 * BAD:
 * - 플래그(on)를 이용해서 함수를 제어하고 있다.
 *
 * SOLUTION:
 * - on, off 함수를 따로 정의해서 명령형으로 관리한다.
 * - 매개변수는 3개 이하가 좋고, 제일 좋은 건 매개변수가 없는 함수
 * */
function switchOn() {}
function switchOff() {}
