const alunos = [
  { nome: "Pedro", nota1: 15, nota2: 30, nota3: 27 },
  { nome: "Renata", nota1: 15, nota2: 25, nota3: 36 },
];

const alunosNotaTotal = alunos.map(aluno => retornarNomeNotaTotal(aluno));

function retornarNomeNotaTotal({ nome, nota1, nota2, nota3 }) {
  const total = nota1 + nota2 + nota3;
  return {nome:nome,notaTotal:total}
}

console.log(alunos)
console.log(alunosNotaTotal)
