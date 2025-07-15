function testing(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log(`Both "${a}" and "${b}" must be numbers`);
        return;
    }

    console.log(`${a} and ${b} are valid numbers.`);
}

testing(2,"Hello")