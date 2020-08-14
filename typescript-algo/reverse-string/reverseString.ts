function reverseString(str: string): string {
  return str
    .split('')
    .reverse()
    .join('');
}

function reverseStringTwo(str: string): string {
  let reversed = '';

  for (let char in str.split('')) {
    reversed = char + reversed;
  }

  return reversed;
}

reverseString('bacon');
