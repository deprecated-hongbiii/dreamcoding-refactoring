/**
 * BAD:
 * - 불필요한 상속
 *
 * SOLUTION:
 * - 필요한 자식식래스에만 메서드를 정의한다.
 * */

class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {}
}
