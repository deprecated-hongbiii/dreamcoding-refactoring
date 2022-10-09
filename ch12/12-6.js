/**
 * BAD:
 * - 외부에서 어떤 type이 있는지 예상하기 어렵다.
 * - 생성자에서 에러를 던지는 것은 정말 나쁘다. (why?)
 * - 외부에서 실수할 수도 있는 것에 대해 validate를 작성하는 것은 좋지 않다.
 *  - validate를 작성하지 않아도 되게 작성하는 것이 더 좋다.
 *
 * SOLUTION:
 * - validateType 함수가 필요없도록 만든다.
 * - 외부에서 type을 받지 않고, 서브클래스를 만든다.
 *  - 필요한 타입별로 클래스를 만든다.
 *  - 오브젝트 책에서 기본요금제, 심야요금제 클래스를 각각 만든 게 떠올랐다.
 * */

class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get type() {
    return 'employee';
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }
}

class Engineer extends Employee {
  get type() {
    return 'engineer';
  }
}

class Manager extends Employee {
  get type() {
    return 'manager';
  }
}

class SalesPerson extends Employee {
  get type() {
    return 'salesperson';
  }
}

const ellie = new Engineer('엘리');
const bob = new Manager('밥');

/**
 * - 처음 코드를 봤을 때 별다른 문제가 없다고 생각함
 * - ['engineer', 'manager', 'salesperson'] 이 배열이 눈에 밟히긴 한다. 변수로 추출해야 하는 걸까?
 * - 사용하는 입장에서 type에 무슨 값이 있을지 추측이 안 돼서 나쁜 코드일까?
 * */
