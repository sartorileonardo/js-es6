//const is apply when do you need create functions, objects and constants.

const dog = {
    name: "Pluto",
    color: "orange",
    age: 5
}

dog["name"] = "Spyke";
dog.name = "Boby";


//Error - cause: const
dog = { name: "Betovem" };

console.log(dog);