const students = [
    {id: 21, name: "Mosharaf"},
    {id: 41, name: "sabina"},
    {id: 14, name: "siam"},
    {id: 71, name: "ayman"},
]

// const students2 = []

// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//   students2.push(element);
    
// }

const names = students.map ( s => s.name );
const ids = students.map ( s => s.id);
const bigger = students.filter( s => s.id > 40);
const biggerOne = students.find( s => s.id > 40);

console.log(biggerOne);

// console.log(students2);