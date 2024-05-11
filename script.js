fetchData();
async function fetchData() {
  try {
    const searchElement = document.getElementById("search");
    const errorName = document.getElementById("alter");
    const pokeImg = document.getElementById("pokemon");
    const pokeName = document.getElementById("poke-name");
    const pokeHeight = document.getElementById("poke-height");
    const pokeWeight = document.getElementById("poke-weight");
    const pokehp = document.getElementById("poke-hp");
    const pokepPower = document.getElementById("poke-power");

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchElement.value.toLowerCase()}`
    );
    errorName.style.display = "none";

    if (!response.ok) {
      // errorName.textContent = "invalid pokemon";
      pokeImg.style.display = "none";
      errorName.style.display = "block";
      pokeName.style.display = "none";
      pokeHeight.style.display = "none";
      pokeWeight.style.display = "none";
      pokehp.style.display = "none";
      pokepPower.style.display = "none";

      throw new Error("we could not fetch this");
    }
    const data = await response.json();
    console.log(data);

    const pokeImage = data.sprites.front_default;
    pokeImg.src = pokeImage;

    pokeName.textContent = `Name: ${data.name}`;
    pokeHeight.textContent = `Height: ${data.height / 10} meters `;
    pokeWeight.textContent = `Weight: ${data.weight / 10} kgs`;
    pokehp.textContent = `HP: ${data.stats[0].base_stat}`;
    pokepPower.textContent = `Power: ${data.stats[1].base_stat}`;

    if (!response.ok) {
      pokeImg.style.display = "none";
    }
    if (response.ok) {
      pokeImg.style.display = "block";
    }
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
