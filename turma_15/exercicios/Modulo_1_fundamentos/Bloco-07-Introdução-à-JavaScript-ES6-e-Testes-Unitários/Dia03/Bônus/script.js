const assert = require('assert');

// Dados
const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
  ];
  
  // Pesquisa

  const searchEmployee = (id, detail) => {
    let employee = '';
  professionalBoard.forEach(element => {
        if (element.id === id) {
        employee = element;
      }
  });
    if (!employee) {
     return ("ID não identificada");
    }
  
    if (!employee[detail]) {
     return ("Informação indisponível");
    }
  
    return employee[detail];
  };
  assert.deepStrictEqual(typeof searchEmployee,'function')
  assert.deepStrictEqual(searchEmployee('1256-4', 'firstName'),'Linda')
  assert.deepStrictEqual(searchEmployee('1256-8', 'specialities'),"ID não identificada")
  assert.deepStrictEqual(searchEmployee('4678-2', 'shift'), "Informação indisponível")