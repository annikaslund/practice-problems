function minimumBribes(q) {
    // input => array of numbers
    // output => a number representing minimum # of 'bribes'

    // sort queue
    // iterate over unsorted queue
        // for each number
        // grab index at sorted queue
        // if difference between two indices is greater than 2
            // return 'Too chaotic'
        // else 
            // add +1 or +2 to count

    // return count
    let qCopy = [...q];
    let sortedQueue = qCopy.sort(function (a, b) { return a - b });
    let count = 0;

    for (let i = 0; i < q.length; i++){
        let sortedIdx = sortedQueue.indexOf(q[i]);
        if (Math.abs(sortedIdx - i) > 2) {
            return 'Too chaotic';
        } else {
          if (sortedIdx > i){
            count += Math.abs(sortedIdx - i);
          }
        }
    }
    
    return count;
}