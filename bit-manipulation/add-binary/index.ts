function addBinary(a: string, b: string): string {
  let result: string = "";
  let carry: number = 0;
  let i: number = a.length - 1;
  let j: number = b.length - 1;

  // Iterate over the strings from right to left
  while (i >= 0 || j >= 0 || carry > 0) {
      const sum: number = ((i >= 0) ? parseInt(a[i]) : 0) + ((j >= 0) ? parseInt(b[j]) : 0) + carry;
      result = (sum % 2).toString() + result;
      carry = Math.floor(sum / 2);
      i--;
      j--;
  }

  return result;
};
