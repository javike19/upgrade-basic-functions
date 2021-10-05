const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(avengers) {
    let longestName = "";
    for (let i = 0 ; i < avengers.length ; i++){
        if (avengers[i].length > longestName.length){
            longestName = avengers[i]
        }
    }
    console.log("el nombre mas largo es", longestName);
}

findLongestWord(avengers);