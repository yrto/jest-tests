function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function calculadora(a, b, operacao) {
  return operacao(a, b);
}

module.exports = { soma, subtrai, calculadora };
