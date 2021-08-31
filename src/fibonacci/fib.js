function fib(n) {
  if (typeof n !== "number") return;
  if (n <= 0) return;
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  let a = 0;
  let b = 1;
  const ret = [a, b];
  const max = Math.floor(n) - 2;
  for (let c = 0; c < max; c++) {
    let soma = a + b;
    ret.push(soma);
    a = b;
    b = soma;
  }
  return ret;
}

module.exports = { fib };
