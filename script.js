fetchData();
async function fetchData() {
  try {
    const searchElement = document.getElementById("search");
    const errorName = document.getElementById("alter");
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchElement.value.toLowerCase()}`
    );
    errorName.style.display = "none";
    if (!response.ok) {
      // errorName.textContent = "invalid pokemon";
      errorName.style.display = "block";
      throw new Error("we could not fetch this");
    }
    const data = await response.json();
    const pokeImg = data.sprites.front_default;
    const pokeName = document.getElementById("pokemon");

    pokeName.src = pokeImg;
    if (!response.ok) {
      pokeName.style.display = "none";
    }
    if (response.ok) {
      pokeName.style.display = "block";
    }
  } catch (error) {
    console.error(error);
  }
}
