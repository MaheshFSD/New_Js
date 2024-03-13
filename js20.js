// creating sub classes using extends ---- 
class Vehicle {
    constructor(wheel,color,cc) {
        console.log(' ------ sub class constructor called ----- ');
        this.wheel = wheel;
        this.color = color;
        this.cc = cc;
    }
    power () {
        console.log(this.wheel, ' ------ has powern --- ', this.cc)
    }
}

class TwoWheeler extends Vehicle {
    
}
console.log(new TwoWheeler('2 wheeler', 'black', 200), ' ------ two wheeler ');
const bike = new TwoWheeler('2 wheeler', 'black', 200);
console.log(bike, ' -========== twoWheel class --- ');
console.log(bike.wheel, bike.power(), ' -========== bike class --- ');

class PetrolBike extends Vehicle {
    constructor(wheel,color,cc,capacity) {
        console.log(' ------ sub class constructor called ----- ');
        super(wheel,color,cc);
        this.capacity = capacity;
    }
    pickup () {
        console.log(' ----- petrol vehicles have good pickup- --------  ');
    }
}

const hondaPetrolBike = new PetrolBike ('2 wheeler', 'Red', 200, '2 people');
console.log(hondaPetrolBike, ' ========= honda instance of petrolbike ------');
console.log(hondaPetrolBike.wheel, hondaPetrolBike.capacity, hondaPetrolBike.pickup(), hondaPetrolBike.power, ' =========== ');
