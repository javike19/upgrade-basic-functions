const numbers = [12, 21, 38, 5, 45, 37, 6];
function average() {
    let sum = 0;
    for (let i = 0; i< numbers.length; i++){
            sum += numbers[i]
    }
    let result= sum / numbers.length
    console.log(result)
}
average();