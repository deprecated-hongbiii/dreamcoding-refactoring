// 컴포지션 (위임)
class Printer {
  #printerHeader;
  constructor(printerHeader) {
    this.#printerHeader = printerHeader
  }
  print() {
    this.#printerHeader
      ? this.#printerHeader.print()
      : console.log('기본적인 출력');
  }
}

class RedPrinterHeader {
  print() {
    console.log('🔴 출력');
  }
}

class BlackPrinterHeader {
  print() {
    console.log('⚫️ 출력')
  }
}

const printers = [new Printer(), new Printer(new RedPrinterHeader()), new Printer(new BlackPrinterHeader())];
printers.forEach(printer => printer.print());

/**
 * 컴포지션의 장점:
 * - 상속을 정말 필요한 경우에 사용할 수 있다.
 * - 레고를 조립하듯이 외부로부터 주입받은 무언가를 사용할 수 있다.
 * */

/**
 * 생각:
 * - TS라면 interface를 사용할 수 있겠다.
 *  - interface PrinterHeader 라고 하면,
 *  - constructor(printerHeader: PrinterHeader)
 *  - class RedPrinterHeader implements PrinterHeader
 *  - 요런 식으로
 * */
