const { fib } = require("./fib");

describe("função fib", () => {
  it("fib retorna um array com a quantidade n de números inteiros da sequência fibonacci", () => {
    expect(fib(1)).toStrictEqual([0]);
    expect(fib(2)).toStrictEqual([0, 1]);
    expect(fib(5)).toStrictEqual([0, 1, 1, 2, 3]);
    expect(fib(6)).toStrictEqual([0, 1, 1, 2, 3, 5]);
  });
  it("fib não retorna nada com parâmetros errados", () => {
    expect(fib(0)).toStrictEqual(undefined);
    expect(fib(6.5)).toStrictEqual([0, 1, 1, 2, 3, 5]);
    expect(fib("7")).toStrictEqual(undefined);
    expect(fib([8, 9])).toStrictEqual(undefined);
    expect(fib(-10)).toStrictEqual(undefined);
  });
});
