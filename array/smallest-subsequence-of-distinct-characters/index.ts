function smallestSubsequence(s: string): string {
    const n = s.length;

  const last = new Int32Array(26).fill(-1);
  for (let i = 0; i < n; i++) last[s.charCodeAt(i) - 97] = i;

  const stack = new Uint8Array(26);   // at most 26 distinct chars
  const inStack = new Uint8Array(26);
  let top = 0;

  for (let i = 0; i < n; i++) {
    const c = s.charCodeAt(i) - 97;
    if (inStack[c]) continue;                    // already placed — skip

    // pop anything bigger that we can afford to lose
    while (top > 0 && stack[top - 1] > c && last[stack[top - 1]] > i) {
      inStack[stack[--top]] = 0;
    }

    stack[top++] = c;
    inStack[c] = 1;
  }

  const out = new Array(top);
  for (let i = 0; i < top; i++) out[i] = String.fromCharCode(stack[i] + 97);
  return out.join('');
};
