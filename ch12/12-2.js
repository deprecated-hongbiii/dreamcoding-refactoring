/**
 * BAD:
 * - 자식클래스들에 공통된 필드(#name)가 있다.
 *
 * SOLUTION:
 * - 공통된 필드를 부모클래스로 올린다.
 * */
class Employee {
  #name
}

class Salesperson extends Employee {}

class Engineer extends Employee {}
