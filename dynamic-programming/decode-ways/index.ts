function numDecodings(s: string): number {
    const arr = Array(s.length + 1).fill(0);
    arr[0] = 1;
    arr[1] = s[0] === "0" ? 0 : 1;
    for (let i = 2; i < arr.length; i++) {
        let firstDigit = parseInt(s.slice(i - 1, i));
        let secondDigit = parseInt(s.slice(i - 2, i));
        if (firstDigit > 0) {
            arr[i] += arr[i - 1];
        }
        if (secondDigit >= 10 && secondDigit <= 26) {
            arr[i] += arr[i - 2];
        }
    }
    return arr[arr.length - 1];
}
