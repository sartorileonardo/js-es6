class Animal {
    isFree = true;
}

class Bird extends Animal {
    constructor(flightSpeed){
        super();
        this.flightSpeed = flightSpeed
    }
}

class Dog extends Animal {
    constructor(runningSpeed){
        super();
        this.runningSpeed = runningSpeed;
    }
}

const myBird = new Bird(40);
myBird.isFree = false;
const myDog = new Dog(20);

console.log(myBird.isFree);


//console.table(new Array(myBird, myDog));