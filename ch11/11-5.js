/**
 * BAD:
 * - 불필요하게 매개변수를 넘기고 있다.
 *
 * SOLUTION:
 * - getter를 이용해 질의함수로 추출한다.
 *
 * TIPS:
 * - 개선 포인트를 찾는 법
 *  - 매개변수의 개수를 줄인다는 생각으로 접근하자.
 * */
export class Order {
  constructor(quantity, itemPrice) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get finalPrice() {
    return this.discountedPrice();
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  discountedPrice() {
    switch (this.discountLevel) {
      case 1:
        return this.basePrice * 0.95;
      case 2:
        return this.basePrice * 0.9;
    }
  }
}
