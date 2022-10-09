/**
 * BAD:
 * - targetTemperature 함수가 다른 모듈과 심각하게 결합되어 있다.
 *  - thermostat 객체와 결합되어 있음
 *
 * SOLUTION:
 * - 외부 의존성이 필요한 경우에는 함수의 매개변수로 전달받는다.
 *
 * TIPS:
 * - 응집도가 높은 상태에서는 매개변수보다는 데이터에 직접 접근할 수 있는 질의함수로 만드는 것이 좋다.
 * - 외부 모듈의 데이터를 주고받을 때는 바로 접근하지 말고, 필요한 데이터를 매개변수를 통해 전달받는 것이 좋다.
 * */
targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(plan, currentTemperature) {
  // ...
}
