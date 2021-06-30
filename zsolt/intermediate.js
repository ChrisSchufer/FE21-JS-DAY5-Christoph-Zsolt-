// --- CARS

class Car {
  brandName;
  modelType;
  yearBuilt;
  transmission;
  driveTrain;
  manufacturingCountries;

  constructor(brandName, modelType, yearBuilt, transmission, driveTrain, manufacturingCountries) {
    this.brandName = brandName;
    this.modelType = modelType;
    this.yearBuilt = yearBuilt;
    this.transmission = transmission;
    this.driveTrain = driveTrain;
    this.manufacturingCountries = manufacturingCountries;
  }

  quickDetails() {
    return this.brandName + " " + this.modelType + " " + this.yearBuilt
  }
}

class Bike extends Car {
  numberOfWheels;

  constructor (brandName, modelType, yearBuilt, transmission, driveTrain, manufacturingCountries, numberOfWheels) {
    super(brandName, modelType, yearBuilt, transmission, driveTrain, manufacturingCountries);
    this.numberOfWheels = numberOfWheels;
  }

  quickDetails() {
    return super.quickDetails() + ` since I'm a bike, I have ${this.numberOfWheels} wheels.`
  }
}

var bike1 = new Bike("bmw", "m 1000 rr", "2020", "manual", "rwd", ["germany, hungary"], "2")
console.log(bike1.quickDetails());
document.getElementsByClassName("test")[0].innerHTML = bike1.quickDetails() + "<br>";