const alunos = [{nome:"Pedro",n1:15,n2:30,n3:25},{nome:"Renata",n1:15,n2:25,n3:36}]

alunos.map((aluno)=>console.log(`Nome: ${aluno.nome} Nota Total: ${aluno.n1+aluno.n2+aluno.n3}`))