let add = (a, b) => (a + b);

document.getElementById("demo").textContent = add(4, 5);

let numbers = [5, 11, 8, 20, 7, 15];

// Verwende die filter-Methode mit einer Arrow Function
let filteredNumbers = numbers.filter(number => number > 10);

console.log(filteredNumbers); // [11, 20, 15]