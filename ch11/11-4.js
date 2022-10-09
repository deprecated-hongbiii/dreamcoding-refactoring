/**
 * BAD:
 * - low, high 값은 room.daysTempRange 안에 들어있기 때문에 나눌 필요가 없다.
 *
 * SOLUTION:
 * - 객체를 통째로 인자로 넘겨준다.
 *
 * TIPS:
 * - 객체를 통째로 넘길 때는 다른 함수, 모듈과 불필요하게 커플링되지 않는지 고려해야 한다.
 *  - 가령 함수에서는 필요하지 않은 값이 객체에 들어있는 경우, 객체를 통째로 넘겨도 괜찮은지 생각해봐야 한다.
 * */
export function temperatureAlerts(room, plan) {
  const alerts = [];
  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push('room temperature went outside range');
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(range) {
    return (
      range.bottom >= this._temperatureRange.low && range.top <= this._temperatureRange.high
    );
  }
}
