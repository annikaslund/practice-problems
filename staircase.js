function staircase(n) {
    for (let i = 1; i <= n; i++){
        let spaces = n - i;
        let numbers = i;
        let string = '';

        for (let j = 0; j < spaces; j++){
            string += ' ';
        }
        for (let k = 0; k < numbers; k++){
            string += '#';
        }
        console.log(string);
    }
}