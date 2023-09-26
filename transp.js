function calcularSoma() {
  var tabela = document.getElementById("tabelaTransporte");
  var soma = 0;

  // Loop através de todas as linhas e soma os valores da coluna especificada
  for (var i = 1; i < tabela.rows.length; i++) {
      var valor = tabela.rows[i].cells[7].value;
      valor = parseFloat(valor.replace("R$", "").replace(",", "."));
      soma += valor;
  }

  // Exibe o resultado no parágrafo com id "resultado"
  document.getElementById("resultado").textContent = "Soma dos valores: R$" + soma.toFixed(2);
}
for (var i = 0; i < linhas.length; i++) {
  linhas[i].addEventListener('click', function() {
    // Quando uma linha é clicada, adicione um "x" à primeira célula
    this.cells[0].innerText = 'x';
  });
}
