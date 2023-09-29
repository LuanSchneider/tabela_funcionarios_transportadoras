function calcularSoma2(){
var soma = 0;
var tabela = document.getElementById("tabelaTransporte"); // Obtém a primeira tabela na página
console.log(tabela)
// Loop através das linhas da tabela
for (var i = 0; i < tabela.rows.length; i++) {
    var row = tabela.rows[i];
    for (var j = 0; j < row.cells.length; j++) {
      var cellValue = parseFloat(row.cells[7] ? row.cells[7].textContent : "0");
      // Converte o texto da célula em um número
        if (!isNaN(cellValue)) {
            soma += cellValue; // Adiciona o valor da célula à soma se for um número
        }
    }
}

// Exibe a soma no elemento "resultado"
var resultadoElement = document.getElementById("resultado");
resultadoElement.textContent = "Soma dos valores: R$" + soma.toFixed(2); // Arredonda a soma para 2 casas decimais

  for (var i = 0; i < linhas.length; i++) {
    linhas[i].addEventListener('click', function() {
      // Quando uma linha é clicada, adicione um "x" à primeira célula
      this.cells[0].innerText = 'x';
    });
  }
  
}
