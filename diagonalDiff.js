// Given a square matrix, calculate the absolute difference between the 
//sums of its diagonals.

function diagonalDifference(arr){
    let leftDiagSum = 0;
    let rightDiagSum = 0;

    for (let i = 0; i < arr.length; i++){
        leftDiagSum += arr[i][i];
        rightDiagSum += arr[i][arr.length-1-i];
    }

    return Math.abs(leftDiagSum - rightDiagSum);
}