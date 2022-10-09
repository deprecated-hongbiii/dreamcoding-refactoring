/**
 * POINT:
 * - 생성자를 캡슐화하기
 * - 외부에서는 Factory 함수를 통해 간편하게 인스턴스를 생성
 *
 * SOLUTION
 * - constructor는 private으로 만든다.
 * - 팩토리 메서드는 여러 개 만들 수 있다.
 *  - typeCode로 무엇을 주어야 할 지 고민하지 않고도 쉽게 인스턴스를 생성할 수 있다.
 * */
export class Employee {
  constructor(name, typeCode) { // TS에서는 private constructor 가능
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  static createEngineer(name) {
    return new Employee(name, 'E')
  }

  static createSeniorEngineer(name) {
    return new Employee(name, 'SE');
  }

  static createMarketer(name) {
    return new Employee(name, 'M')
  }
}

const employee = new Employee('엘리', 'E'); // 💩 BAD: 엔지니어로 만들고 싶은데 타입코드 뭐지..?
const employee2 = Employee.createEngineer('엘리'); // ✨ GOOD
