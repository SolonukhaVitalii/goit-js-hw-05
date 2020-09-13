/*класс
Напиши класс Car с указанными свойствами и методами.*/

class Car {
    // Write code under this line
   static getSpecs(car) {
      return `maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this.price}`;
   }
   
   constructor(maxSpeed, speed = 0, isOn = false, distance = 0, price) {
     this._maxSpeed = maxSpeed;
     this._speed = speed;
     this._isOn = isOn;
     this._distance = distance;
     this._price = price;
   }
   
   get price() {
   this._price;
   }
   
   set price(value) {
   this._price = value;
   }
   
   turnOn() {
   this._isOn = true;
   }
   
   turnOff() {
   this._isOn = false;
   this._maxSpeed = 0;
   }
   
   accelerate(value) {
    if (this._speed + value > 0) {
   this._speed = 0;
   }
   }
   
   decelerate(value) {
   if (this._speed + value > 0) {
   this._speed = 0;
   }
   else {
   this._speed -= value;
   }
   }
   
   drive(hours) {
   if (this._isOn === true) {
   this._distance = hours* this.speed;
   }
   }
 }
  
 const mustang = new Car({ maxSpeed: 200, price: 2000 });
 mustang.turnOn();
 mustang.accelerate(50);
 mustang.drive(2);
 
 console.log(Car.getSpecs(mustang));
 // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
 
 mustang.decelerate(20);
 mustang.drive(1);
 mustang.turnOff();
 
 console.log(Car.getSpecs(mustang));
 // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
 
 console.log(mustang.price); // 2000
 mustang.price = 4000;
 console.log(mustang.price); // 4000
 