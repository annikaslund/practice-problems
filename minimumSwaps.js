// You are given an unordered array consisting of consecutive 
// integers  [1, 2, 3, ..., n] without any duplicates. You are 
// allowed to swap any two elements. You need to find the minimum 
// number of swaps required to sort the array in ascending order.

// [7, 1, 3, 2, 4, 5, 6]
// [1, 7, 3, 2, 4, 5, 6]
// [1, 2, 3, 7, 4, 5, 6]

function minimumSwaps(arr){
    let swapCount = 0;
    let startIdx = 0;
    let endIdx = startIdx + 1;

    while (startIdx < endIdx){
        if (arr[startIdx] !== startIdx+1){
            if (arr[endIdx] === startIdx+1){
                swapCount += 1;
                [arr[startIdx], arr[endIdx]] = [arr[endIdx], arr[startIdx]];
                endIdx = startIdx + 1;
            } else {
                endIdx += 1;
            }
        } else {
            startIdx += 1;
            endIdx += 1;
        }
    }

    return swapCount;
}