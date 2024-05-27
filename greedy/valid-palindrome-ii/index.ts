function validPalindrome(s: string): boolean {
  if (s.length < 2) return true;
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isValidPalindrome(s, left + 1, right) ||
        isValidPalindrome(s, left, right - 1)
      );
    }

    left += 1;
    right -= 1;
  }

  return true;
}

function isValidPalindrome(s: string, left: number, right: number) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
}
