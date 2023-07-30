export default class ErrorRepository {
  constructor() {
    this.error = new Map();
    this.error.set(1, 'first err');
    this.error.set(2, 'second err');
    this.error.set(3, 'third err');
  }

  translate(code) {
    if (this.error.get(code)) {
      return this.error.get(code);
    }
    return 'Unknown error';
  }
}
