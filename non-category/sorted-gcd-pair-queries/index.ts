function gcdValues(nums: number[], queries: number[]): number[] {
    let maxV = 0;
  for (let i = 0; i < nums.length; i++) if (nums[i] > maxV) maxV = nums[i];

  const cnt = new Int32Array(maxV + 1);
  for (let i = 0; i < nums.length; i++) cnt[nums[i]]++;

  // cntMul[g] = how many elements are divisible by g
  const cntMul = new Int32Array(maxV + 1);
  for (let g = 1; g <= maxV; g++) {
    let c = 0;
    for (let m = g; m <= maxV; m += g) c += cnt[m];
    cntMul[g] = c;
  }

  // exactly[g] = how many pairs (i<j) have gcd EXACTLY g
  // NOTE: Float64Array, not Int32Array — counts reach ~5e9 and would overflow int32
  const exactly = new Float64Array(maxV + 1);
  for (let g = maxV; g >= 1; g--) {
    const c = cntMul[g];
    let e = (c * (c - 1)) / 2;                 // pairs where gcd is a MULTIPLE of g
    for (let m = 2 * g; m <= maxV; m += g) e -= exactly[m]; // subtract the strict multiples
    exactly[g] = e;
  }

  // cum[g] = how many pairs have gcd <= g  (prefix sum over the sorted multiset)
  const cum = new Float64Array(maxV + 1);
  let running = 0;
  for (let g = 1; g <= maxV; g++) {
    running += exactly[g];
    cum[g] = running;
  }

  // each query k: smallest g whose cumulative count exceeds k
  const ans = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const k = queries[i];
    let lo = 1, hi = maxV;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (cum[mid] > k) hi = mid;
      else lo = mid + 1;
    }
    ans[i] = lo;
  }
  return ans;
};
