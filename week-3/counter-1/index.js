let counter = 0;
function incrementCounter() {
    counter++;
    console.log('Counter:', counter);
}

setInterval(incrementCounter, 1000);