function calcularSoma () {
  // Obtenha a tabela pelo ID
  var tabela = document.getElementById("tabelaTransporte");

  // Inicialize a soma total
  var soma = 0;

  // Percorra todas as linhas e some os valores da coluna especificada
  for (var i = 1; i < tabela.rows.length; i++) {
      var valor = tabela.rows[i].cells[7].innerText;
      valor = parseFloat(valor.replace("R$", "").replace(",", "."));
      soma += valor;
  }

  // Atualize o resultado com a soma total
  document.getElementById("resultado").textContent = "Soma dos valores: ", soma;toFixed(2);
}
for (var i = 0; i < linhas.length; i++) {
  linhas[i].addEventListener('click', function() {
    // Quando uma linha é clicada, adicione um "x" à primeira célula
    this.cells[0].innerText = 'x';
  });
}
