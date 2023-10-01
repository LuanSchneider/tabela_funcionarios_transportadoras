var tabela = document.getElementById('minhaTabela');
var total = 0;

for (var i = 1; i < tabela.rows.length; i++) {
    var valorCelula = parseFloat(tabela.rows[i].cells[7].innerHTML);
    total += valorCelula;
}

console.log('A soma da coluna é: ' + total);

  for (var i = 0; i < linhas.length; i++) {
    linhas[i].addEventListener('click', function() {
      // Quando uma linha é clicada, adicione um "x" à primeira célula
      this.cells[0].innerText = 'x';
    });
  }
  

