const M = 1000000007;

// a*b % M without losing precision (a, b < M)
function mulmod(a, b) {
  const ah = Math.floor(a / 65536), al = a % 65536;
  return ((ah * b % M) * 65536 + al * b) % M;
}

function power(b, e) {
  let r = 1;
  b %= M;
  while (e > 0) {
    if (e & 1) r = mulmod(r, b);
    b = mulmod(b, b);
    e = Math.floor(e / 2);
  }
  return r;
}

function sumAndMultiply(s: string, queries: number[][]): number[] {
  const n = s.length;

  const inv10 = power(10, M - 2);          // 700000005
  const pow10 = new Array(n + 1);          // pow10[k] = 10^k
  const ipow10 = new Array(n + 1);         // ipow10[k] = 10^-k
  pow10[0] = ipow10[0] = 1;
  for (let k = 1; k <= n; k++) {
    pow10[k] = mulmod(pow10[k - 1], 10);
    ipow10[k] = mulmod(ipow10[k - 1], inv10);
  }

  const C = new Int32Array(n + 1);         // # non-zero digits in s[0..i-1]
  const S = new Int32Array(n + 1);         // digit sum of s[0..i-1]
  const P = new Array(n + 1).fill(0);      // prefix sums of d_i * 10^-C[i+1]

  for (let i = 0; i < n; i++) {
    const d = s.charCodeAt(i) - 48;
    C[i + 1] = C[i] + (d !== 0 ? 1 : 0);
    S[i + 1] = S[i] + d;
    P[i + 1] = (P[i] + mulmod(d, ipow10[C[i + 1]])) % M;
  }

  return queries.map(([l, r]) => {
    const inner = (P[r + 1] - P[l] + M) % M;
    const x = mulmod(pow10[C[r + 1]], inner);
    const sum = S[r + 1] - S[l];
    return mulmod(x, sum);
  });
};
