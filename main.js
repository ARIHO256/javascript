let x = "Ariho";
let b = "Nowamaani";
console.log(x + b)
if (x > b){
    console.log("X is greater than b")
}else{
    console.log("X is less than b")
}

ariho(1, 4);

function ariho(a = 1, b = 1) {
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.error("Both inputs must be numbers.");
        return null;
    }

    const result = a * b;

    console.log(`Multiplying ${a} and ${b} gives: ${result}`);

    return result;
}
