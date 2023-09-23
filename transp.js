// Função para calcular a soma de uma coluna
function calcularSoma(coluna) {
    var tabela = document.getElementById("tabelaTransporte");
    var soma = 0;
    
    // Loop através de todas as linhas e soma os valores da coluna especificada
    for (var i = 1; i < tabela.rows.length; i++) {
        soma += Number(tabela.rows[i].cells[coluna].innerText);
    }
    
    return soma;
}

// Exemplo de como usar a função para calcular a soma da coluna "Valor (R$)"
console.log("Soma dos valores: R$" + calcularSoma(8));