// Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
    return ar.reduce(function (acc, num) {
        return acc + num;
    })
}
