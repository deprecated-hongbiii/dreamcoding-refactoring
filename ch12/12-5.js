/**
 * BAD:
 * - 불필요한 필드 상속
 *
 * SOLUTION:
 * - 필요한 서브클래스에서만 필드를 정의한다.
 *
 * TIPS:
 * - 설계를 먼저 해라.
 * - extends, interface, abstract class, composition 중 어떤 것이 적절할지 생각하기
 * */

class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  #quota;
}
