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

var car1 = new Car("toyota", "supra", "1994", "manual", "rwd", ["japan"])
console.log(car1.manufacturingCountries)
console.log(car1.quickDetails());
document.getElementsByClassName("test")[0].innerHTML = car1.quickDetails() + "<br>";

var car2 = new Car("nissan", "datsun 280z", "1974", "manual", "rwd", ["japan", "us", "uk"])
console.log(car2.manufacturingCountries);
console.log(car2.quickDetails());
document.getElementsByClassName("test")[0].innerHTML += car2.quickDetails() + "<br>";

var car3 = new Car("mazda", "rx-7", "1996", "manual", "rwd", ["japan", "germany"])
console.log(car3.manufacturingCountries)
console.log(car3.quickDetails());
document.getElementsByClassName("test")[0].innerHTML += car3.quickDetails() + "<br>";

// --- ANIMALS

class Animal {
  commonName;
  species;
  genus;
  family;
  diet;
  rangeOfHabitat;

  constructor(commonName, species, genus, family, diet, rangeOfHabitat) {
    this.commonName = commonName;
    this.species = species;
    this.genus = genus;
    this.family = family;
    this.diet = diet;
    this.rangeOfHabitat = rangeOfHabitat;
  }

  quickFacts() {
    return `This ${this.commonName}, otherwise known as ${this.species}, belongs to the genus of ${this.genus} and the family of ${this.family}. It is ${this.diet} and it lives in parts of ${this.rangeOfHabitat}.`
  }
}

var animal1 = new Animal("bald eagle", "h. leucocephalus", "haliaeetus", "accipitridae", "carnivorous", ["north america"]);
console.log(animal1.quickFacts());
document.getElementsByClassName("test2")[0].innerHTML = animal1.quickFacts() + "<br>";

var animal2 = new Animal("gray wolf", "c lupus", "canis", "canidae", "carnivorous", ["north america", " eurasia"]);
console.log(animal2.quickFacts());
document.getElementsByClassName("test2")[0].innerHTML += animal2.quickFacts() + "<br>";

var animal3 = new Animal("indian python", "p molorus", "python", "pythonidae", "carnivorous", ["india"]);
console.log(animal3.quickFacts());
document.getElementsByClassName("test2")[0].innerHTML += animal3.quickFacts();