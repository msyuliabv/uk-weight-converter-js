function convertWeight() {
  const kilograms = Number(document.getElementById("kgInput").value);
  const errorMessage = document.getElementById("errorMessage");
  const result = document.getElementById("result");

  errorMessage.textContent = "";
  result.textContent = "";

  if (isNaN(kilograms) || kilograms <= 0) {
    errorMessage.textContent = "Please enter a valid weight greater than 0.";
    return;
  }

  const totalPounds = kilograms * 2.20462;
  let stones = Math.floor(totalPounds / 14);
  let pounds = Math.round(totalPounds % 14);

  if (pounds === 14) {
    stones += 1;
    pounds = 0;
  }

  result.textContent = `${kilograms} kg is equal to ${stones} stone and ${pounds} pounds.`;
}