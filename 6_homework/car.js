class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    const isBrandValid = typeof this.#brand === "string" && this.#brand > 0 && this.#brand < 50;

    if (isBrandValid) {
      this.brand = value;
    }
  }

  get model() {
    return this.#model;
  }

  set model(value) {
    const isModelValid = typeof this.#model === "string" && this.#model > 0 && this.#model < 50;

    if (isModelValid) {
      this.#model = value;
    }
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    const isYearValid = typeof value === "number" && value >= 1900 && value <= 2022;

    if (isYearValid) {
      this.#yearOfManufacturing = value;
    }
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    const isMaxSpeedValid = typeof value === "number" && value >= 100 && value <= 300;

    if (isMaxSpeedValid) {
      this.#maxSpeed = value;
    }
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    const maxFuelIsValid = typeof value === "number" && value >= 5 && value <= 20;

    if (maxFuelIsValid) {
      this.#maxFuelVolume = value;
    }
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    const fuelConsumptionIsValid = typeof value === "number";

    if (fuelConsumptionIsValid) {
      this.#fuelConsumption = value;
    }
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }

    this.#isStarted = !this.#isStarted;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }

    this.#isStarted = !this.#isStarted;
  }

  fillUpGasTank(amount) {
    if (typeof amount !== "number") {
      throw new Error('Неверное количество топлива для заправки');
    }

    if (amount <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    }

    if (amount + this.#currentFuelVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }

    this.#currentFuelVolume += amount;
  }

  drive(speed, hours) {
    const distance = speed * hours;
    const fuelVolume = distance * this.#fuelConsumption / 100;

    if (typeof speed !== "number") {
      throw new Error('Неверная скорость');
    }

    if (typeof hours !== "number" || hours <= 0) {
      throw new Error('Неверное количество часов');
    }

    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }
    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }

    if (fuelVolume > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива');
    }

    this.#currentFuelVolume =- fuelVolume;
    this.#mileage += distance;
  }
}

module.exports = { Car };