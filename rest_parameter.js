//rest is apply when do you need too undefined parameters

function sumNumbers(...numbers){
    let totalResult = 0;
    numbers.forEach(num => {
        totalResult += num;
    });
    return totalResult;
}

//Support too parameters
console.log(sumNumbers(5, 5, 5));