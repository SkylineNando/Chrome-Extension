async function fetchDollarQuote() {
  const quoteElement = document.getElementById("quote");
  try {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await response.json();
    const brlRate = data.rates.BRL;
    quoteElement.textContent = `1 USD = ${brlRate.toFixed(2)} BRL`;
  } catch (error) {
    quoteElement.textContent = "Erro ao carregar cotação.";
    console.error(error);
  }
}

document.getElementById("refresh").addEventListener("click", fetchDollarQuote);

fetchDollarQuote(); // Atualizar ao abrir
