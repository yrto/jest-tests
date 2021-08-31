const { soma, subtrai, calculadora } = require("./index");

test("Função soma deve somar corretamente", () => {
  expect(soma(2, 3)).toBe(5);
});

test("Função subtrai deve subtrair corretamente", () => {
  expect(subtrai(5, 2)).toBe(3);
});

test("Função calculadora deve calcular corretamente", () => {
  expect(calculadora(5, 2, soma)).toBe(7);
});
