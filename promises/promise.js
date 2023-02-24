const employees = [
  {
    id: 357,
    name: "Pedro",
    age: 28,
    state: "MG",
    office: "motorista",
    wage: 2800,
  },
  {
    id: 586,
    name: "Raquel",
    age: 26,
    state: "MG",
    office: "projetista",
    wage: 3200,
  },
  {
    id: 589,
    name: "Fernando",
    age: 32,
    state: "MG",
    office: "cadista",
    wage: 1800,
  },
  {
    id: 513,
    name: "Fernanda",
    age: 22,
    state: "SP",
    office: "secretária",
    wage: 1600,
  },
  {
    id: 412,
    name: "Alex",
    age: 35,
    state: "SP",
    office: "engenheiro",
    wage: 4500,
  },
];

function lookForEmployeeWithID(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const employee = employees.find((e) => e.id === id);

      if (employee) {
        resolve(employee);
      } else {
        reject("Funcionário não cadastrado.");
      }
    }, 7000);
  });
}

async function getEmployee(id) {
  try {
    const result = await lookForEmployeeWithID(id);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

getEmployee(586);
getEmployee(985);
