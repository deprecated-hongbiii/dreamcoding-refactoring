/**
 * BAD:
 * - 12.6 예제도 동일
 *  - Employee마다 다른 동작이 있는 것도 아니고, type 하나만 다를 때는 서브클래스까지 만들지 않아도 됨
 * - 동일한 함수이지만 다른 동작을 해야할 때는 서브클래스로 만드는 것이 적절하나,
 * - 속성이 딱 하나 다를 뿐이라면 하나의 클래스에서 처리하는 게 적절하다.
 *
 * SOLUTION:
 * - 외부에서 알 필요 없는 내부 로직들은 캡슐화 (switch 부분)
 * - 팩토리 메서드 제공
 * */
class Person {
  #name;
  #genderCode;
  constructor(name, genderCode) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get genderCode() {
    return this.#genderCode;
  }

  get isMale() {
    return this.#genderCode === 'M';
  }

  static create(record) {
    switch (record.gender) {
      case 'M':
        return new Person(record.name, 'M');
      case 'F':
        return new Person(record.name, 'F');
      default:
        return new Person(record.name, 'X');
    }
  }
}

function loadFromInput(data) {
  const result = [];
  data.forEach((record) => {
    result.push(Person.create(record));
  });
  return result;
}

const people = loadFromInput([
  { name: '엘리', gender: 'F' },
  { name: '철수', gender: 'M' },
  { name: '밥', gender: 'M' },
]);
const numberOfMales = people.filter((p) => p.isMale()).length;
console.log(numberOfMales);
