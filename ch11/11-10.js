/**
 * BAD:
 * - 재사용되지 않고 한 번만 사용된다면 클래스로 만드는 것이 불필요하다.
 *  - 예시) Math 유틸함수를 사용할 때 매번 new Math.max(1, 2) 하지 않고 static 메서드를 사용
 *
 * SOLUTION:
 * - 일반 함수로 만든다.
 *
 * QUESTION:
 * - Math 클래스처럼 static 메서드를 가지는 클래스로 만들어도 될까?
 * */
export function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}
