var newCar = {
    carID: 1,
    brand: 'Nissan',
    model: 'GT-R',
    type: 'Nismo',
    color: 'black',
    weight: 1400,

    msg: function() {
        return `<strong>${this.brand}</strong>-<strong>${this.model}</strong> <strong>${this.type}</strong> with the ID of <strong>${this.carID}</strong>, the color <strong>${this.color}</strong> and a weight of <strong>${this.weight}</strong>kg has been built and is ready for sale!<br><br>`
    }
}

var newTruck = {
    truckID: 773,
    brand: 'Volvo',
    model: 'FH',
    type: 'I-Save',
    color: 'grey',
    weight: 3000,

    msg: function() {
        return `<strong>${this.brand}</strong>-<strong>${this.model}</strong> <strong>${this.type}</strong> with the ID of <strong>${this.truckID}</strong>, the color <strong>${this.color}</strong> and a weight of <strong>${this.weight}</strong>kg has been built and is ready for sale!<br><br>`
    }
}

var newMotorcycle = {
    bikeID: 18037,
    brand: 'BMW',
    model: 'RR',
    type: '1000',
    color: 'blue',
    weight: 250,
    limits: false,

    msg: function() {
        return `<strong>${this.brand}</strong>-<strong>${this.model}</strong> <strong>${this.type}</strong> with the ID of <strong>${this.bikeID}</strong>, the color <strong>${this.color}</strong> and a weight of <strong>${this.weight}</strong>kg has been built and is ready for sale! LIMITS: ${this.limits}<br><br>`
    }
}


document.getElementById('demo').innerHTML += newCar.msg();
document.getElementById('demo').innerHTML += newTruck.msg();
document.getElementById('demo').innerHTML += newMotorcycle.msg();
