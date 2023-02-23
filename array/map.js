const students = [
  { name: "Andre", note1: 14, note2: 21, note3: 24 },
  { name: "Carla", note1: 17, note2: 28, note3: 25 },
  { name: "Laura", note1: 15, note2: 21, note3: 27 },
  { name: "Pedro", note1: 15, note2: 31, note3: 27 },
  { name: "Renata", note1: 15, note2: 25, note3: 36 },
];

function returnNameAndTotalGrade({ name, note1, note2, note3 }, index) {
  const fullGrade = note1 + note2 + note3;
  const studentNumber = index + 1;
  return { studentNumber, name, fullGrade };
}

const listWithFinalGrade = students.map(returnNameAndTotalGrade);

console.log(listWithFinalGrade);
