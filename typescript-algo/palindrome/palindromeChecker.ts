function palindromeChecker(str: string): boolean {
  const reversed = str
    .split('')
    .reverse()
    .join('');

  return reversed === str;
}
