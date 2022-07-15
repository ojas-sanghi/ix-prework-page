function fib(numDigits)
{
  // Approach 1
  let fibonacci = [0, 1];
  for (let i = 0; i < numDigits - 2; i++)
  {
    fibonacci[fibonacci.length] = fibonacci[i] + fibonacci[i + 1]
  }
  console.log(fibonacci);

  // Approach 2
  let a = 0;
  let b = 1;
  let i = 0;
  while (i < numDigits)
  {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
    i++;
  }
}

fib(10);