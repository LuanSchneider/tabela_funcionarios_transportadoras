function calcularsomavalor(){
var tabela = document.getElementById('tabelaTransporte');


for (var i = 2; i < tabela.rows.length; i++) {
    var valorCelula = parseFloat(imput(tabela.rows[i].cells[7].innerHTML));
    
    total += valorCelula;
    


console.log('A soma da coluna é: ' + total);
}
  for (var i = 0; i < linhas.length; i++) {
    rows[i].addEventListener('click', function() {
     
      this.cells[0].innerText = 'x';
    });
  }
}

