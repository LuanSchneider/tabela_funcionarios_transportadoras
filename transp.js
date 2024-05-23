function calcularSomaValor() {
  // Get all table rows
  const rows = document.querySelectorAll("tabelaTransporte");

  // Initialize sum variables
  let totalComissao = 0;
  let totalValor = 0;
  let totalFrete = 0;

  // Loop through each row (except the header row)
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];

    // Get the commission, value, and freight elements from the current row
    const comissaoElement = row.querySelector("#comissao");
    const valorElement = row.querySelector("#valor");
    const freteElement = row.querySelector("#frete");

    // Check if elements exist and have values
    if (comissaoElement && valorElement && freteElement) {
      // Parse the values to numbers (assuming they are valid numbers)
      const comissao = parseFloat(comissaoElement.value);
      const valor = parseFloat(valorElement.value);
      const frete = parseFloat(freteElement.value);

      // Add the values to the respective totals
      totalComissao += comissao;
      totalValor += valor;
      totalFrete += frete;
    } else {
      // Handle the case where elements are missing or values are invalid
      console.error("Error: Missing element or invalid value in row", i + 1);
    }
  }

  // Calculate the total sum (commission + value + freight)
  const somaTotal = totalComissao + totalValor + totalFrete;

  // Display the total sum (you can modify this part to display it where you want)
  console.log("Soma Total:", somaTotal);
  // You can also update a DOM element to show the sum:
  // document.getElementById("somaTotalDisplay").textContent = somaTotal;
}