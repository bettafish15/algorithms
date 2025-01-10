function wordSubsets(words1: string[], words2: string[]): string[] {
  const ans: string[] = [];
      const maxfreq: number[] = new Array(26).fill(0);

      for (const str of words2) {
          const freq: number[] = new Array(26).fill(0);
          for (const ch of str) {
              freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
          }
          for (let i = 0; i < 26; i++) {
              maxfreq[i] = Math.max(maxfreq[i], freq[i]);
          }
      }

      for (const str of words1) {
          const freq: number[] = new Array(26).fill(0);
          for (const ch of str) {
              freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
          }

          let issubset = true;
          for (let i = 0; i < 26; i++) {
              if (freq[i] < maxfreq[i]) {
                  issubset = false;
                  break;
              }
          }
          if (issubset) {
              ans.push(str);
          }
      }

      return ans;
  };
