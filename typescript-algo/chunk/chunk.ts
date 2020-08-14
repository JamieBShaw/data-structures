function chunk(arr: number[], size: number): number[] {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));

    index += size;
  }

  return chunked;
}

function chunkTwo(arr: number[], size: number): number[][] {
  const chunked = [];

  for (let element of arr) {
    const last = chunked[chunked.length - 1];

    if (!last || last === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}
