const API_URL = "https://pokeapi.co/api/v2/pokemon/";

const HTMLResponse = document.getElementById("pokemones");

async function mostrarPokes() {
	try {
		await fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				for (let i of data.results) {
					fetch(i.url)
						.then((poke) => poke.json())
						.then((poke) => {
							HTMLResponse.innerHTML += `<div class="card">
          <img src="${poke.sprites.front_default}" alt="">
          <h1>${poke.name}</h1>
      </div>`;
						});
				}
			});
	} catch (e) {
		HTMLResponse.innerHTML += `<h1>No encontramos tus pokemones 😢.</h1>`;
	}
}

mostrarPokes();
