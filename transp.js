function calcularSoma() {
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

  // Formate a soma para incluir pontos e vírgulas corretamente
  soma = soma.toFixed(2).toString();
  soma = soma.replace(/(\d)(\d{8})$/,"$1.$2"); // Coloca o ponto dos milhões
  soma = soma.replace(/(\d)(\d{5})$/,"$1.$2"); // Coloca o ponto dos milhares
  soma = soma.replace(/(\d)(\d{2})$/,"$1,$2"); // Coloca a vírgula antes dos 2 últimos dígitos

  // Atualize o resultado com a soma total
  document.getElementById("resultado").textContent = "Soma dos valores: R$" + soma;
}

for (var i = 0; i < linhas.length; i++) {
  linhas[i].addEventListener('click', function() {
    // Quando uma linha é clicada, adicione um "x" à primeira célula
    this.cells[0].innerText = 'x';
  });
}
