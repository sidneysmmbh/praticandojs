const students = [
  { name: "Andre", note1: 14, note2: 21, note3: 24 },
  { name: "Carla", note1: 17, note2: 28, note3: 25 },
  { name: "Laura", note1: 15, note2: 21, note3: 27 },
  { name: "Pedro", note1: 15, note2: 31, note3: 27 },
  { name: "Renata", note1: 15, note2: 25, note3: 36 },
];

const addNotes = (student) => {
  const { note1, note2, note3 } = student;
  return note1 + note2 + note3;
};

const lookForTheStudentWithTheBestGrade = (
  studentWithTheBestGrade,
  currentStudent
) => {
  const bestGrade = addNotes(studentWithTheBestGrade);
  const currentGrade = addNotes(currentStudent);
  if (bestGrade > currentGrade) {
    return studentWithTheBestGrade;
  } else {
    return currentStudent;
  }
};

const studentWithTheBestGrade = students.reduce(
  lookForTheStudentWithTheBestGrade
);
console.log(
  `${studentWithTheBestGrade.name} possui a maior nota final: ${addNotes(
    studentWithTheBestGrade
  )} pontos.`
);
