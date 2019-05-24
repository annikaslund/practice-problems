function alternatingCharacters(s) {
    let deleteCount = 0;

    for (let i = 0; i < s.length-1; i++){
        if (s[i] === s[i + 1]) {
            deleteCount += 1;
        }
    }

    return deleteCount;
}
