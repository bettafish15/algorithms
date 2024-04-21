function partition(s: string): string[][] {
  const result = [];

  const backtrack = (stack: string[], sParam: string) => {
    if (!isPalindrome(stack[stack.length - 1])) return;
    if (sParam.length === 0) {
      result.push([...stack]);
      return;
    }

    for (let i = 0; i < sParam.length; i++) {
      stack.push(sParam.substring(0, i + 1));
      backtrack(stack, sParam.substring(i + 1));
      stack.pop();
    }
  };

  const isPalindrome = (string: string) => {
    if (!string || string.length === 0) return true;
    const middleIndex = Math.floor(string.length / 2);

    for (let i = 0; i < middleIndex; i++) {
      if (string[i] !== string[string.length - 1 - i]) return false;
    }

    return true;
  };

  backtrack([], s);

  return result;
}
