function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            negative += 1;
        } else if (arr[i] > 0) {
            positive += 1;
        } else {
            zero += 1;
        }
    }

    let posTotal = +(positive / arr.length).toFixed(6);
    let negTotal = +(negative / arr.length).toFixed(6);
    let zeroTotal = +(zero / arr.length).toFixed(6);

    console.log(posTotal);
    console.log(negTotal);
    console.log(zeroTotal);
}