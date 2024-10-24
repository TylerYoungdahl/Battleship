export default class Ship {
  constructor(length, type) {
    this.length = length;
    this.type = type;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }
}
