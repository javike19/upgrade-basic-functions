const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    let count = {};
    for (let index = 0; index < param.length; index++) {
        if (param[index] in count) {
            count[param[index]]++
        } else {
            count[param[index]] = 1;
        }
    }
    return count;
  }

  console.log(repeatCounter(counterWords));