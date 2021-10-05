const array = ["Ana", "Alvaro", "Jesus", "Steve", "Papaodpoulos"];

function longestStudent(array) {
    let longestName = "";

    for (let i = 0; i < array.length; i++){
        if(array[i].length > longestName.length){
            longestName = array[i];
        }
    }
    console.log("el nombre mas largo es =",longestName);
}

longestStudent(array)