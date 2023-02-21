const students = [
  { name: "Andre", note1: 14, note2: 21, note3: 24 },
  { name: "Carla", note1: 17, note2: 28, note3: 25 },
  { name: "Laura", note1: 15, note2: 21, note3: 27 },
  { name: "Pedro", note1: 15, note2: 31, note3: 27 },
  { name: "Renata", note1: 15, note2: 25, note3: 36 }, 
];

const displayFinalResult = (
  { name, note1, note2, note3 } = students,
  index
) => {
  const fullGrade = note1 + note2 + note3;
  const situation = fullGrade >= 70 ? "Aprovado(a)" : "Reprovado(a)";
  const id = index + 1;

  console.log(
    `ID: ${id} | Nome: ${name} | Nota Final: ${fullGrade} | ${situation}`
  );
};

console.log("Resultado Final:");
students.forEach(displayFinalResult);
