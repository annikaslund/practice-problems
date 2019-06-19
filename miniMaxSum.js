// naive solution for miniMaxSum

function miniMaxSum(arr) {
    let min = undefined;
    let max = 0;
    let idx = 0;
    let currSum = 0;

    while (idx < arr.length) {
        currSum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (idx !== i) {
                currSum += arr[i];
            }
        }

        if (currSum < min || min === undefined) {
            min = currSum;
        }

        if (currSum > max) {
            max = currSum;
        }

        idx += 1;
    }

    console.log(min, max);
}