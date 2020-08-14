function sentenceCap(sentence: string): string {
  let words: string[] = [];

  for (let word in sentence.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join('');
}
