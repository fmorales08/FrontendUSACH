const API_URL = "https://rickandmortyapi.com/api/character";

const container = document.getElementById("character");

/*async function getCharacter(URL) {
	try {
		await fetch(URL)
			.then((response) => response.json())
			.then((data) => console.log(data.results));
	} catch (e) {
		console.log("Error fetch");
	}
}

getCharacter(API_URL);*/

class Character {
	constructor(nombre, especie, imagen) {
		this._nombre = () => nombre;
		this._especie = () => especie;
		this._imagen = () => imagen;
		this.printTemplate();
	}

	async getCharacter(idCharacter) {
		const res = await fetch(
			`https://rickandmortyapi.com/api/character/${idCharacter}`
		);
		const data = await res.json();
		return data;
	}
	async dataCharacter(idCharacter) {
		const newCharacter = await this.getCharacter(idCharacter);
		// console.log(newCharacter);
		return newCharacter;
	}
	characterTemplate() {
		return `<div class="card">
		<img src="${nombre}" alt="">
		<h1>${especie}</h1>
		</div>`;
	}

	printTemplate() {
		container.innerHTML = this.characterTemplate();
	}
}
const newCharacter = new Character();

console.log(newCharacter.printTemplate());
