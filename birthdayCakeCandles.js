function birthdayCakeCandles(ar) {
    let maxHeight = Math.max(...ar);
    let count = 0;

    for (let i = 0; i < ar.length; i++){
        if (ar[i] === maxHeight) {
            count += 1;
        }
    }
    
    return count;
}