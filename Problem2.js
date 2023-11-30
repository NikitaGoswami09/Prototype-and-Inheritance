// Vehicle constructor function
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
  }
  
  // Prototype methods for Vehicle
  Vehicle.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.refuel = function () {
    console.log(`${this.brand} ${this.model} is refueling.`);
  };
  
  // Car constructor function inheriting from Vehicle
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    // Call the superclass constructor
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
  }
  
  // Inherit the prototype of Vehicle
  Car.prototype = Object.create(Vehicle.prototype);
  
  // New method for Car
  Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking.`);
  };
  
  // Airplane constructor function inheriting from Vehicle
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    // Call the superclass constructor
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
  }
  
  // Inherit the prototype of Vehicle
  Airplane.prototype = Object.create(Vehicle.prototype);
  
  // New method for Airplane
  Airplane.prototype.takeOff = function () {
    console.log(`${this.brand} ${this.model} is taking off.`);
  };
  
  // Example usage
  const myCar = new Car('Toyota', 'Camry', 60, 'Petrol', 4);
  const myAirplane = new Airplane('Boeing', '747', 800, 'Jet Fuel', 4, true);
  
  // Demonstrate methods for Car
  myCar.accelerate();
  myCar.brake();
  myCar.refuel();
  myCar.honk();
  
  // Demonstrate methods for Airplane
  myAirplane.accelerate();
  myAirplane.brake();
  myAirplane.refuel();
  myAirplane.takeOff();
  