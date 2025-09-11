function sortVowels(s: string): string {
  const vowels = "aeiouAEIOU";
  const originalArr = s.split("");
  const sortedArr = originalArr
    .filter((el) => /^[aeiouAEIOU]$/.test(el))
    .toSorted();

  let count = 0;

  for (let i = 0; i < originalArr.length; i++) {
    if (/^[aeiouAEIOU]$/.test(originalArr[i])) {
      originalArr[i] = sortedArr[count];
      count += 1;
    }
  }

  return originalArr.join("");
}
