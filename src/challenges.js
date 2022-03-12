// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 && parametro2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let separado = string.split(' ');
  return separado;
}

// Desafio 4
function concatName(vetor) {
  let concat = vetor[vetor.length - 1] + ', ' + vetor[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeral) {

  let maior = -10;
  let quantidade = 0;
  for (let a = 0; a < numeral.length; a += 1) {
    if (maior < numeral[a]) {
      (maior = numeral[a]);
    }
  }
  for (let b = 0; b < numeral.length; b += 1) {
    if (maior === numeral[b]) {
      quantidade += 1;
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
}