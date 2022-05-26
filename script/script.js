// 1)

let student = {
    name: 'Andrey',
    surname: 'Gonchar',
    age: 30,
    courseOfStudy: 1,
    englishLevel: 'Intermediate'
};

console.log(student);

delete student.englishLevel;

//2
let book = {
    numberOfPage: 545,
    cover: true,
    isTheAuthorAlive: false,
    isBestseller: true,
    booksEditions: 20000000,
};

for (let key in book) {
    if (typeof book[key] === 'boolean');
    console.log(key);
};

//3

let myFavoritCar = {
    model: 'Audi Q8',
    color: 'black',
    numberOfDoors: 4,
    horsepower: 340,
    engineVolume: 3.0,
    typeOfGearbox: "Automat",
}
console.log(myFavoritCar);

let myCar = {};

Object.assign(myCar, myFavoritCar);

console.log(myFavoritCar);

let car = {};

for (let key in myFavoritCar) {
    car[key] = myFavoritCar[key];
};

console.log(car);

//4

let animalObj = {
    name: "cat",
    legs: 4,
    color: "black"
};

function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs`;
};

animal(animalObj);

console.log(animal(animalObj));

//5

let train = {
    locomotiveLength: 25,
    totalCoachCars: 4,
    coachLength: 15,
};

function calcLengthOfTrain(obj) {
    let length = 0;
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            length += obj[key];
        };
    };
    return length;
};

let LengthOfTrain = calcLengthOfTrain(train);

console.log(LengthOfTrain);


let student1 = {
    name: 'Ivan',
    surname: 'Ivanov',
    numberGroup: 11,
    printMessage() {
        console.log(`Это студент ${this.name} ${this.surname} из группы ${this.numberGroup}`);
    },
};
console.log(student1.printMessage());


//7

function Animal(nameaAnimal, legs, isPredator, name) {
    this.nameaAnimal = nameaAnimal;
    this.legs = legs;
    this.isPredator = isPredator;
    this.name = name;
};
let animalDog = new Animal('dog', 4, false, 'Shadow');

console.log(animalDog);