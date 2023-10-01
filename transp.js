function calcularSomaValor(coluna) {
  let sum = 0;
  for (let i = 0; i < coluna.length; i++) {
    sum += parseFloat(coluna[7].textContent);
  }
  return sum;
}

let coluna = [ "7"];
let resultado = somarColuna(coluna);
console.log(resultado); // 15
  for (var i = 0; i < linhas.length; i++) {
    linhas[i].addEventListener('click', function() {
      // Quando uma linha é clicada, adicione um "x" à primeira célula
      this.cells[0].innerText = 'x';
    });
  }
  

