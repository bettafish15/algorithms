function restoreIpAddresses(s: string): string[] {
  const result = [];

  const backtrack = (stack: string[], s: string) => {
    if (stack.length > 4) return;
    if (
      !!stack[stack.length - 1] &&
      stack[stack.length - 1].length > 1 &&
      stack[stack.length - 1].startsWith("0")
    )
      return;
    if (!!stack[stack.length - 1] && Number(stack[stack.length - 1]) > 255)
      return;
    if (s === "" && stack.length === 4) {
      result.push(stack.join("."));
      return;
    }
    for (let i = 1; i <= s.length; i++) {
      const ipAddress = s.substring(0, i);
      stack.push(ipAddress);
      backtrack(stack, s.substring(i));
      stack.pop();
    }
  };

  backtrack([], s);

  return result;
}
