/**
 * BAD:
 * - Stack에는 push, pop 메서드가 있어야 하는데
 * - List를 상속하도록 하면 불필요한 List의 메서드가 같이 Stack에 포함된다.
 *
 * SOLUTION:
 * - 필요한 것만 가지도록 컴포지션을 사용하는 것이 효율적, 효과적이다.
 * - List에 아이템을 추가, 삭제하는 push, pop은 내부적으로 구현하면 된다.
 * - Stack 클래스에서는 List와는 상관없이 원하는 메서드만 외부로 노출시킬 수 있다.
 * */

class List {}

class Stack {
  constructor() {
    this.storage = new List();
  }

  pop() {}

  push() {}
}

/**
 * QUESTIONS:
 * - Stack 클래스 내부에서 직접 List 인스턴스를 생성하는 것은 결합도를 높이는 것은 아닐까?
 * */
