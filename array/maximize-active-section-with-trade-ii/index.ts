function maxActiveSectionsAfterTrade(s: string, queries: number[][]): number[] {
    const n = s.length;

    let totalOnes = 0;
    for (let i = 0; i < n; i++) if (s.charCodeAt(i) === 49) totalOnes++;

    // zero-runs (the "dark stretches"): zStart[k]..zEnd[k]
    const zStart = [], zEnd = [];
    let i = 0;
    while (i < n) {
        if (s.charCodeAt(i) === 48) {
            const st = i;
            while (i < n && s.charCodeAt(i) === 48) i++;
            zStart.push(st); zEnd.push(i - 1);
        } else i++;
    }
    const Z = zStart.length;
    const q = queries.length;
    const ans = new Array(q);

    // Pair k = (run k, run k+1). value = len(k) + len(k+1).
    // A pair sits FULLY inside [l,r] iff zStart[k] >= l AND zEnd[k+1] <= r.
    // zStart and zEnd both increase with k, so eligible pairs form a CONTIGUOUS
    // range [kLo, kHi] — a sparse table answers "max value in that range" in O(1).
    const P = Math.max(0, Z - 1);
    let sparse = null, logTable = null;
    if (P > 0) {
        const val = new Int32Array(P);
        for (let k = 0; k < P; k++)
            val[k] = (zEnd[k] - zStart[k] + 1) + (zEnd[k + 1] - zStart[k + 1] + 1);

        logTable = new Int32Array(P + 1);
        for (let x = 2; x <= P; x++) logTable[x] = logTable[x >> 1] + 1;
        const K = logTable[P] + 1;
        sparse = [val];
        for (let j = 1; j < K; j++) {
            const prev = sparse[j - 1], len = 1 << j;
            const cur = new Int32Array(P - len + 1);
            for (let x = 0; x + len <= P; x++) {
                const a = prev[x], b = prev[x + (1 << (j - 1))];
                cur[x] = a > b ? a : b;
            }
            sparse.push(cur);
        }
    }
    const rangeMax = (lo, hi) => {
        const j = logTable[hi - lo + 1];
        const a = sparse[j][lo], b = sparse[j][hi - (1 << j) + 1];
        return a > b ? a : b;
    };

    const firstGE = (arr, v, len) => { // smallest idx in [0,len) with arr[idx] >= v
        let lo = 0, hi = len;
        while (lo < hi) { const m = (lo + hi) >> 1; arr[m] >= v ? (hi = m) : (lo = m + 1); }
        return lo;
    };
    const lastLE = (arr, v, len) => {  // largest idx in [0,len) with arr[idx] <= v, else -1
        let lo = 0, hi = len;
        while (lo < hi) { const m = (lo + hi) >> 1; arr[m] <= v ? (lo = m + 1) : (hi = m); }
        return lo - 1;
    };

    for (let qi = 0; qi < q; qi++) {
        const l = queries[qi][0], r = queries[qi][1];
        let gain = 0;

        // interior fully-inside pairs → one range-max
        if (P > 0) {
            const kLo = firstGE(zStart, l, P);
            const kHi = Math.min(lastLE(zEnd, r, Z) - 1, P - 1);
            if (kLo <= kHi) { const best = rangeMax(kLo, kHi); if (best > gain) gain = best; }
        }

        // the two edge dark-stretches may be cut by l or r → handle by hand
        if (Z >= 1) {
            const a = firstGE(zEnd, l, Z);   // leftmost run touching the window
            const b = lastLE(zStart, r, Z);  // rightmost run touching the window
            if (a < Z && b >= 0 && a < b) {
                const La = Math.min(zEnd[a], r) - Math.max(zStart[a], l) + 1;
                const Lb = Math.min(zEnd[b], r) - Math.max(zStart[b], l) + 1;
                const rightSize = (a + 1 < b) ? (zEnd[a + 1] - zStart[a + 1] + 1) : Lb;
                const c1 = La + rightSize; if (c1 > gain) gain = c1;
                const leftSize = (b - 1 > a) ? (zEnd[b - 1] - zStart[b - 1] + 1) : La;
                const c2 = leftSize + Lb; if (c2 > gain) gain = c2;
            }
        }

        ans[qi] = totalOnes + gain;
    }
    return ans;
};
