export default class Ship {
  constructor(length, hits, sunk) {
    this.length = length;
    this.hits = hits;
    this.sunk = false;
  }

  hit() {
    hits++;
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }
}
