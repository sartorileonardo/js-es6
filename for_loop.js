//for is apply when do you need work with too items

const fruits = ["orange", "apple", "banana"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(fruit of fruits){
    console.log(fruit);
}

fruits.forEach(fruit => {
    console.log(fruit);
});


fruits.forEach(f => console.log(f));