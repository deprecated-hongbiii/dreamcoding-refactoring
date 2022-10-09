/**
 * BAD:
 * - 알 수 없는 상수값
 *
 * SOLUTION:
 * - Error 클래스를 사용한다.
 * - 그냥 Error 클래스 대신, 의미있는 에러 클래스를 만들어서 사용할 수도 있다.
 * */
function localShippingRules(data) {
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
}

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super();
    this.errorCode = errorCode;
  }
}

try {
  const result = localShippingRules()
} catch (error) {
  if (error instanceof OrderProcessingError) {
    console.log('에러처리...')
  }
}
