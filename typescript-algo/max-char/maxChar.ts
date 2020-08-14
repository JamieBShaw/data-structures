function maxChar(str: string): string {
  let charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      maxChar = char;
      max = charMap[char];
    }
  }

  return maxChar;
}

function maxCharTwo(str: string): string {
  let max = 0;
  let maxChar = '';
  let charMap: object = {};

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
