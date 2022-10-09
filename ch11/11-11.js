/**
 * BAD:
 * - side effect를 일으킨다.
 *  - calculateAscent 함수에서 외부에 있는 값(totalAscent)을 바로 업데이트
 *
 * SOLUTION:
 * - 값을 업데이트해야 한다면 외부의 값을 직접 수정하는 것이 아니라, 수정한 값을 을환한다.
 * */
export function ascentVelocity(points, totalMinutes) {
  function calculateAscent() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
  }

  const totalAscent = calculateAscent([{ elevation: 10 }, { elevation: 20 }]);

  return totalAscent / totalMinutes;
}
