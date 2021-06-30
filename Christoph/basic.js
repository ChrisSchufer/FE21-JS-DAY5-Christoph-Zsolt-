// -----------------basic-object-----------------
// var newCar = {
//     carID: 1,
//     brand: 'Nissan',
//     model: 'GT-R',
//     type: 'Nismo',
//     color: 'black',
//     weight: 1400,

//     msg: function() {
//         return `<strong>${this.brand}</strong>-<strong>${this.model}</strong> <strong>${this.type}</strong> with the ID of <strong>${this.carID}</strong>, the color <strong>${this.color}</strong> and a weight of <strong>${this.weight}</strong>kg has been built and is ready for sale!<br><br>`
//     }
// }

// var newTruck = {
//     truckID: 773,
//     brand: 'Volvo',
//     model: 'FH',
//     type: 'I-Save',
//     color: 'grey',
//     weight: 3000,

//     msg: function() {
//         return `<strong>${this.brand}</strong>-<strong>${this.model}</strong> <strong>${this.type}</strong> with the ID of <strong>${this.truckID}</strong>, the color <strong>${this.color}</strong> and a weight of <strong>${this.weight}</strong>kg has been built and is ready for sale!<br><br>`
//     }
// }

// var newMotorcycle = {
//     bikeID: 18037,
//     brand: 'BMW',
//     model: 'RR',
//     type: '1000',
//     color: 'blue',
//     weight: 250,
//     limits: false,

//     msg: function() {
//         return `<strong>${this.brand}</strong>-<strong>${this.model}</strong> <strong>${this.type}</strong> with the ID of <strong>${this.bikeID}</strong>, the color <strong>${this.color}</strong> and a weight of <strong>${this.weight}</strong>kg has been built and is ready for sale! LIMITS: ${this.limits}<br><br>`
//     }
// }


// document.getElementById('basic-object').innerHTML += newCar.msg();
// document.getElementById('basic-object').innerHTML += newTruck.msg();
// document.getElementById('basic-object').innerHTML += newMotorcycle.msg();

// -----------------basic-class-----------------
// class car {
//     ID;
//     brand;
//     model;
//     type;
//     color;
//     weight;

//     constructor(id, brand, model, type, color, weight) {
//         this.ID = id;
//         this.brand = brand;
//         this.model = model;
//         this.type = type;
//         this.color = color;
//         this.weight = weight;
//         document.getElementById('basic-class').innerHTML += this.msgNewCar();
//         document.getElementById('basic-class').style.background = 'lightblue';
//         document.getElementById('basic-class').style.padding = '20px';
//         document.getElementById('basic-class').style.border = '5px solid red';
//     }

//     msgNewCar() {
//         return `<strong>${this.brand}</strong>-<strong>${this.model}</strong> <strong>${this.type}</strong> with the ID of <strong>${this.ID}</strong>, the color <strong>${this.color}</strong> and a weight of <strong>${this.weight}</strong>kg has been built and is ready for sale!<br><br>I got called from the constructor :)<br><br><br><br>`
//     }
// }
// var Nissan = new car(1, 'Nissan', 'GT-R', 'Nismo', 'black', 1400);

// ----------------------------------------------------------------------------------------------
// class animal {
//     name;
//     speed;
//     food_type;
//     native_country;


//     constructor(name, speed, food_type, native_country) {
//         this.name = name;
//         this.speed = speed;
//         this.food_type = food_type;
//         this.native_country = native_country;
//         document.getElementById('basic-class').innerHTML += this.msgNewAnimal();
//     }

//     msgNewAnimal() {
//         return `A <strong>${this.name}</strong> has its roots in <strong>${this.native_country}</strong>, is a <strong>${this.food_type}</strong> and can accelerate up to <strong>${this.speed}</strong> km/h<br><br>`
//     }
// }

// var Cheetah = new animal('Cheetah', 60, 'meat eater', 'africa');

// -----------------intermediate-----------------
// class motorbike extends car{
//     number_of_wheels;
//     acceleration;

//     constructor(id, brand, model, type, color, weight, number_of_wheels, acceleration) {
//         super(id, brand, model, type, color, weight);
//         this.number_of_wheels = number_of_wheels;
//         this.acceleration = acceleration;
//         document.getElementById('basic-class').innerHTML += this.msgMotorbike();
//     }

//     msgMotorbike() {
//         return `${super.msgNewCar()} EXTRA INFO:<br>Number of wheels: <strong>${this.number_of_wheels}</strong><br>Acceleration: <strong>${this.acceleration}</strong><br><br>`
//     }
// }
// var BMWrr1000 = new motorbike(347, 'BMW', 'RR', '1000', 'blue', 250, 2, 'front-wheel');

// -----------------extra-----------------(not finished)
function rndNumb() {
    return Math.round(Math.random() * 10);
}

class hotel {
    hotelName;
    numberOfNights;
    adress;
    image;

    constructor(hotelName, adress, image, numberOfNights) {
        this.hotelName = hotelName;
        this.adress = adress;
        this.image = image;
        this.numberOfNights = numberOfNights;
    }

    showAvailability() {
        if(this.numberOfNights < rndNumb()) {
            document.getElementById("hotel").innerHTML += `<button>I´ll reserve</button>`;
        }else {
            document.getElementById("hotel").innerHTML += `Sorry, no available nights for ${this.hotelName}`;
        }
    }
}
var austria = new hotel('Hilton', '123bakerstreet', '', 4);
austria.showAvailability();

