const employees = [
  { name: "Pedro", age: 28, state: "MG", office: "motorista", wage: 2800 },
  { name: "Raquel", age: 26, state: "MG", office: "projetista", wage: 3200 },
  { name: "Fernando", age: 32, state: "MG", office: "cadista", wage: 1800 },
  { name: "Fernanda", age: 22, state: "SP", office: "secretária", wage: 1600 },
  { name: "Alex", age: 35, state: "SP", office: "engenheiro", wage: 4500 },
];

const selectedGroup = employees.filter((employee)=>{return employee.age<30 && employee.state==="MG"})

console.log(selectedGroup)
