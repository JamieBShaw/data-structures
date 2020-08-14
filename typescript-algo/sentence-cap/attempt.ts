function sentenceCapTwo(sentence: string): string {
  const words: string[] = [];

  for (let word in sentence.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join('');
}
