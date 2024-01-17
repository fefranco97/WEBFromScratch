const config = {
  url: "https://openexchangerates.org/api/latest.json",
  app_id: "",
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

    let value = amount * lastHourRates[currency];

    value = (Math.round(value * 100) / 100).toFixed(2);

    document.getElementById(
      "result"
    ).innerHTML = `Valor convertido para ${currency}: ${value}`;
  }
};
