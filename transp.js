function calcularSoma() {
    var tabela = document.getElementById("tabelaTransporte");
    var soma = 0;

    // Loop através de todas as linhas e soma os valores da coluna especificada
    for (var i = 0; i < tabela.rows.length; i++) {
        soma += parseFloat(tabela.rows[i].cells[7].value);
    }

    // Exibe o resultado no parágrafo com id "resultado"
    document.getElementById("resultado").innerText = "Soma dos valores: R$" + soma;
}