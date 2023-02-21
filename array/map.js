const alunos = [
  { nome: "Pedro", nota1: 15, nota2: 31, nota3: 27 },
  { nome: "Renata", nota1: 15, nota2: 25, nota3: 36 },
  { nome: "Laura", nota1: 17, nota2: 28, nota3: 27 },
];

function retornarNomeNotaTotal({ nome, nota1, nota2, nota3 } = aluno, index) {
  const notaTotal = nota1 + nota2 + nota3;
  const numeroAluno = index + 1;
  return { numeroAluno, nome, notaTotal };
}

const alunosNotaTotal = alunos.map(retornarNomeNotaTotal);

console.log(alunos);
console.log(alunosNotaTotal);
