function chunkThree(arr: number[], size: number): number[] {
  let chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));

    index += size;
  }

  return chunked;
}
