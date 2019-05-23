// Starting with a 1-indexed array of zeros and a list of operations, 
// for each operation add a value to each of the array element between 
// two given indices, inclusive. Once all operations have been 
// performed, return the maximum value in your array.

// input => a number representing the number of 0's
            // 2-D array, inner arrays have 3 values, first two are 
            // indices & third is value to add
// output => max value from array 

function arrayManipulation(n, queries){
    let zeroes = new Array(n);
    zeroes.fill(0);

    for (let i = 0; i < queries.length; i++){
        let startIdx = queries[i][0];
        let endIdx = queries[i][1];
        let addBy = queries[i][2];

        for (let j = startIdx; j <= endIdx; j++){
            zeroes[j] += addBy;
        }
    }

    return Math.max(...zeroes);
}