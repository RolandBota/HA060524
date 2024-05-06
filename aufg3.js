let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];

let grossb = animals.map(tier => tier.toUpperCase());
let kleinb = animals.map(tier => tier.toLowerCase());
console.log(grossb);
console.log(kleinb);




let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
console.log(people[0].name);
let person = people.map(x => x.name);
console.log(person);
  