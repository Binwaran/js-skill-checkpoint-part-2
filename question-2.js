const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

const scoreMoreThan50 = students.filter(hightScore=>hightScore.score>50);
console.log(scoreMoreThan50);
const addScore = scoreMoreThan50.map(addTen=>addTen.score*1.1);
console.log(addScore);
const sumScore = addScore.reduce((acc,cur)=>acc+cur,0);
console.log(`Total score is ${sumScore}`);