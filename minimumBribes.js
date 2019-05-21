// look at the value at the index
// subtract abs value at position
// if difference is greater than 2,
    // return 'too chaotic'
    // else, swap & +1

// need to add sorted variable
function minimumBribes(q){
    let bribes = 0;
    for (let i = 0; i < q.length; i++){
        if (Math.abs(q[i] - i) > 2){
            return 'Too chaotic';
        };
        if (q[i+1] !== undefined && q[i] > q[i+1]){
            bribes += 1;
            [q[i], q[i+1]] = [q[i+1], q[i]];
        }
    }
    return bribes;
}

