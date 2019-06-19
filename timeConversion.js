function timeConversion(s) {
    if (s.slice(0, 2) !== '12' && s[s.length - 2] === 'P') {
        let hour = +(s.slice(0, 2));
        let minAndSec = s.slice(2, 8);
        hour += 12;
        return `${hour}` + minAndSec;
    } else if (s.slice(0, 2) === '12' && s[s.length - 2] === 'A') {
        let hour = '00';
        return hour + s.slice(2, 8);
    }
    return s.slice(0, 8);
}