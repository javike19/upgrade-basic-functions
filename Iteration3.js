const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll() {
    let sum = 0;
    for (let i = 0; i< numbers.length; i++){
            sum += numbers[i]
    }
    console.log(sum);
}

sumAll();