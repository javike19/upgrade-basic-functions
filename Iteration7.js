const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, name) {
    let result;
    for (let index = 0; index < param.length; index++) {
        if(param[index] === name) {
            return index
        }
    }
    return "No hay resultado";
  }

  console.log(finderName(nameFinder, "Marc"));