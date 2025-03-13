const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้

const allPeople = [...techupPeople,...techcoolPeople];
console.log(allPeople);
const ageLower20 = allPeople.filter( youngTeen => youngTeen.age <20);
console.log(ageLower20);