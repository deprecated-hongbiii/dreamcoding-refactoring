/**
 * BAD:
 * - 자식클래스에서 중복된 필드, 생성자 로직
 *
 * SOLUTION:
 * - 중복되는 #name을 부모클래스로 올리고 super의 매개변수로 넘겨준다.
 * */

class Party {
  #name;
  constructor(name) {
    this.#name = name;
  }
}

class Employee extends Party {
  #id;
  #monthlyCost;
  constructor(name, id, monthlyCost) {
    super(name);
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }
}

class Department extends Party {
  #staff;
  constructor(name, staff) {
    super(name);
    this.#staff = staff;
  }
}

const ellie = new Employee('엘리', 123, 13);
const department = new Department('개발부서', ellie);
