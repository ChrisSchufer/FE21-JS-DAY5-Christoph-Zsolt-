// --- CARS ---

var car1 = {
  brandName: "toyota",
  modelType: "supra",
  yearBuilt: "1994",
  transmission: "manual",
  driveTrain: "rwd",
  manufacturingCountries: ["japan", "germany"],

  quickDetails: function() {
    return this.brandName + " " + this.modelType + " " + this.yearBuilt;
  }
}
console.log(car1.quickDetails());
console.table(car1)
document.getElementsByClassName("test")[0].innerHTML = car1.quickDetails();



var car2 = {
  brandName: "nissan",
  modelType: "datsun 280z",
  yearBuilt: "1976",
  transmission: "manual",
  driveTrain: "rwd",
  manufacturingCountries: ["japan"],

  quickDetails: function() {
    return this.brandName + " " + this.modelType + " " + this.yearBuilt;
  }
}
console.log(car2.quickDetails());
console.table(car2)


var car3 = {
  brandName: "mazda",
  modelType: "rx-7",
  yearBuilt: "1996",
  transmission: "manual",
  driveTrain: "rwd",
  manufacturingCountries: ["japan", "us", "uk"],

  quickDetails: function() {
    return this.brandName + " " + this.modelType + " " + this.yearBuilt;
  }
}
console.log(car3.quickDetails());
console.table(car3)


// --- ANIMALS ---

var animal1 = {
  commonName: "bald eagle",
  species: "h. leucocephalus",
  genus: "haliaeetus",
  family: "accipitridae",
  diet: "carnivorous",
  rangeOfHabitat: ["north america"],

  quickFacts: function() {
    return `The ${this.commonName}, otherwise known as ${this.species}, belongs to the genus of ${this.genus} and the family of ${this.family}. It is a ${this.diet} and lives in parts of ${this.rangeOfHabitat}.`
  }
}
console.log(animal1.quickFacts());
console.table(animal1)

var animal2 = {
  commonName: "gray wolf",
  species: "c lupus",
  genus: "canis",
  family: "canidae",
  diet: "carnivorous",
  rangeOfHabitat: ["north america", "eurasia"],

  quickFacts: function() {
    return `The ${this.commonName}, otherwise known as ${this.species}, belongs to the genus of ${this.genus} and the family of ${this.family}. It is a ${this.diet} and lives in parts of ${this.rangeOfHabitat}.`
  }
}
console.log(animal2.quickFacts());
console.table(animal2)

var animal3 = {
  commonName: "indian python",
  species: "p molorus",
  genus: "python",
  family: "pythonidae",
  diet: "carnivorous",
  rangeOfHabitat: ["india"],

  quickFacts: function() {
    return `The ${this.commonName}, otherwise known as ${this.species}, belongs to the genus of ${this.genus} and the family of ${this.family}. It is a ${this.diet} and lives in parts of ${this.rangeOfHabitat}.`
  }
}
console.log(animal3.quickFacts());
console.table(animal3)
