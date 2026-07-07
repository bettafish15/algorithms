function sumAndMultiply(n: number): number {
    if(n === 0) return 0
    let digits = Array.from(String(n), Number).filter(digit => digit !== 0)

    return digits.reduce((sum, digit) => sum + digit) * Number(digits.join(""))
};
