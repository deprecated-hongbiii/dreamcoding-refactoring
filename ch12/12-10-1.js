// 컴포지션으로 바꾸기
/**
 * SOLUTION:
 * - 팩토리 메서드를 만든다.
 *  - 어떤 방식으로 인스턴스를 만들지는 팩토리 메서드를 여러 개 만들어서 결정하면 된다.
 * */

class Booking {
  #show;
  #date;
  constructor(show, date) {
    this.#show = show;
    this.#date = date;
  }

  get hasTalkback() {
    return this.#premiumDelegate
      ? this.#premiumDelegate.hasTalkback
      : this.#show.hasOwnProperty('talkback') && !this.isPeakDay;
  }

  get #privateBasePrice() {
    let result = this.#show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);

      return result;
    }
  }

  get basePrice() {
    let result = this.#show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }

    return this.#premiumDelegate
      ? this.#premiumDelegate.extendBasePrice(result)
      : this.#privateBasePrice;
  }

  get hasDinner() {
    return this.#premiumDelegate ? this.#premiumDelegate.hasDinner : undefined;
  }

  #bePremium(extras) {
    this.#premiumDelegate = new PremiumBookingDelegate(this, extras);
  }

  static createBooking(show, date) {
    return new Booking(show, date);
  }

  static createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date, extras);
    result.#bePremium(extras);
    return result;
  }
}

class PremiumBookingDelegate {
  #host;
  #extras;
  constructor(hostBooking, extras) {
    this.#host = hostBooking;
    this.#extras = extras;
  }

  get hasTalkback() {
    return this.#host.#show.hasOwnProperty('talkback');
  }

  get basePrice() {
    return Math.random(this.#host._privateBasePrice + this.#extras.PremiumFee);
  }

  get hasDinner() {
    return this.#extras.hasOwnProperty('dinner') && !this.#host.isPeakDay;
  }

  extendBasePrice(base) {
    return Math.round(base + this.#extras.premiumFee);
  }
}

const booking = Booking.createBooking(show, date);
const premiumBooking = Booking.createPremiumBooking(show, date, extras);

/**
 * 느낀점:
 * - TS가 아니어서 인터페이스도 못 만들고.. constructor에 isPremium을 넘겨야 하나 싶었는데
 * - 팩토리 메서드로 해결하면 되는 문제였다.
 * - 팩토리 메서드 사용에 아직 익숙하지 않은 듯
 * */
