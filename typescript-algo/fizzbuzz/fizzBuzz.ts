function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log('FIZZBUZZ');
    } else if (i % 2 === 0) {
      console.log('FIZZ');
    } else if (i % 3 === 0) {
      console.log('BUZZ');
    } else {
      console.log(i);
    }
  }
}

//or

function fizzBuzzTwo(n: number): void {
  for (let i = 1; i <= n; i++) {
    const t = i % 3 == 0,
      f = i % 5 == 0;

    console.log(t && f ? 'FizzBuzz' : t ? 'Fizz' : f ? 'Buzz' : i);
  }
}
