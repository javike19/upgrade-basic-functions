const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let newElements = [];
    for (let index = 0; index < param.length; index++) {
        if (!newElements.includes(param[index])){
            newElements.push(param[index]);
        }
        
    }
    return newElements;
  }

  console.log("Duplicados", duplicates);
  console.log("No duplicado", removeDuplicates(duplicates))