function calcularSoma() {
  var tabela = document.getElementById("tabelaTransporte");
  var soma = 0;

  // Loop através de todas as linhas e soma os valores da coluna especificada
  for (var i = 1; i < tabela.rows.length; i++) {
      soma += parseFloat(tabela.rows[i].cells[7].innerText);
  }

  // Exibe o resultado no parágrafo com id "resultado"
  document.getElementById("resultado").innerText = "Soma dos valores: R$" + soma.toFixed(2);
}
// Primeiro, obtenha todas as linhas da tabela
var linhas = document.getElementById('tabelaTransporte').rows;

// Em seguida, adicione um ouvinte de evento a cada linha
for (var i = 0; i < linhas.length; i++) {
  linhas[i].addEventListener('click', function() {
    // Quando uma linha é clicada, adicione um "x" à primeira célula
    this.cells[0].innerText = 'x';
  });
}
