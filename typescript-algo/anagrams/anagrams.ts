function anagram(strA: string, strB: string): boolean {
  const aCharMap = generateCharMap(strA);
  const bCharMap = generateCharMap(strB);

  if (aCharMap === bCharMap) {
    return true;
  }

  return false;
}

function generateCharMap(str: string): { [key: string]: number } {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}
