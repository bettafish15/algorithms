function shiftingLetters(s: string, shifts: number[][]): string {
    const shiftList = Array(s.length + 1).fill(0);

    shifts.forEach(([starti, endi, direction]) => {
        shiftList[starti] += direction === 1 ? 1 : -1;
        shiftList[endi + 1] += direction === 1 ? -1 : 1;
    });

    // Compute Cumulative Shifts
    for (let i = 1; i < s.length; i++) {
        shiftList[i] += shiftList[i - 1];
    }

    return s
        .split("")
        .map((char, i) => {
            const c = char.charCodeAt(0) - 97;
            const shiftAmount = ((shiftList[i] % 26) + 26) % 26;
            return String.fromCharCode(((c + shiftAmount) % 26) + 97);
        })
        .join("");
};
