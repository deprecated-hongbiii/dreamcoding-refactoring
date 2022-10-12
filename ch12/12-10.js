// 상속
class Printer {
  print() {
    console.log('기본적인 출력');
  }
}

class Network {
  send();
}

class RedPrinter extends Printer{
  print() {
    console.log('🔴 출력');
  }
}

const printers = [new Printer(), new RedPrinter()];
printers.forEach(printer => printer.print());

/**
 * 상속의 문제점:
 * - 다중 상속 불가
 * - 만약 Network까지 상속하여 네트워크 통신을 하는 RedPrinter를 만들고 싶을 때
 * - 다중 상속이 불가능하다는 문제가 있음
 * - 새로운 프린터가 많이 생겨서 프린터마다 하는 일이 달라질 때
 * - 상속을 이용하면 수정, 확장이 어렵다.
 * */
