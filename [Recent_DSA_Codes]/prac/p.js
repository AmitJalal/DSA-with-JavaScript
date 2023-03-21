let fs = require('fs');
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// Do not edit above this line
// Code Here
class gearVehicle {
  #model = 'Suzuki';
  #numberOfGear = 0;
  speed = 0;

  constructor(model) {
    this.#model = model;
  }

  #increaseGear() {
    this.#numberOfGear++;
  }

  increaseSpeed(n) {
    if (n === 0) return;
    this.speed += n;
    this.speedCount = this.speed;
    if (
      this.speed % 20 === 0 ||
      this.speed === 20 ||
      Math.abs(this.speed - n) === 20
    )
      this.#increaseGear();
  }

  get getSpeed() {
    return this.speed;
  }
  get getNumberOfGear() {
    return this.#numberOfGear;
  }
  get getModel() {
    return this.#model;
  }
}
// Do not edit below this line
let n = parseInt(readLine());

let model = readLine();
let vehicle = new gearVehicle(model);

for (let i = 1; i < n; i++) {
  amount = parseInt(readLine());
  vehicle.increaseSpeed(amount);
}

let speed = vehicle.getSpeed;

let gear = vehicle.getNumberOfGear;

// Output the final speed and final number of gear
console.log(speed + ' ' + gear);
