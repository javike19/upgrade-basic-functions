const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord() {
    let sum = 0;
    let numberString = 0;
    let result = 0;
    for (let i = 0; i< mixedElements.length; i++){
        if (typeof mixedElements[i] === "string"){
            numberString += mixedElements[i].length;
        }
        else{
            sum += mixedElements[i];
        }
        result = sum + numberString;
    }
console.log(result);
}

averageWord();



