const config = {
  url: "https://openexchangerates.org/api/latest.json",
  app_id: "0",
  prettyprint: false,
  show_alternative: true,
  options: { method: "GET", headers: { accept: "application/json" } },
};

window.onload = async () => {
  const lastHourRates = await getAllRates();
  const buttton = document.getElementById("btn");
  buttton.addEventListener("click", convertValueOfCurrency);

  renderRates(lastHourRates);

  async function getAllRates() {
    let data = await fetch(generateUrl(config), config.options)
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => console.error(err));

    return data.rates;
  }

  function renderRates(allCurrencies) {
    let html = "";
    Object.keys(allCurrencies).forEach(
      (currency) => (html += `<option value="${currency}">${currency}</option>`)
    );

    document.getElementById("currencies").innerHTML += html;
  }

  function generateUrl(config) {
    return `${config.url}?app_id=${config.app_id}
  &prettyprint=${config.prettyprint}
  &show_alternative=${config.show_alternative}`;
  }

  function convertValueOfCurrency() {
    const amount = document.getElementById("value").value;
    const currency = document.getElementById("currencies").value;

    let value = (
      Math.round(amount * lastHourRates[currency] * 100) / 100
    ).toFixed(2);
    value = formatAmount(value);

    document.getElementById(
      "result"
    ).innerHTML = `Valor convertido para ${currency}: ${value}`;
  }

  function formatAmount(amount) {
    amount = amount
      .toString()
      .replace(".", ",")
      .replace(/^0+/, "")
      .replace(/(?!\.)(\d{1,3})(?=(\d{3})+(?!\d))/g, "$&.");
    return amount;
  }
};
