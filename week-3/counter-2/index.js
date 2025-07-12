let counter = 0;

function incrementCounter() {
    counter++;
    console.log('Counter:', counter);
}

setTimeout(incrementCounter, 1000);