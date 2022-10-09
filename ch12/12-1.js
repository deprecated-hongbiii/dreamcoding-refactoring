/**
 * BAD:
 * - 자식 클래스들에서 동일한 메서드를 정의하고 있다.
 *
 * SOLUTION:
 * - 공통된 메서드는 부모 클래스로 올린다.
 * */

// 예시 1
class Employee {
  get name() {}
}

class Salesperson extends Employee {}

class Engineer extends Employee {}

// 예시 2
class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {}
class Employee extends Party {}
