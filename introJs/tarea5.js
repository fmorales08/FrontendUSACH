/*Mostrar en consola la secuencia de Fibonacci:
a. Entre los números 0 y 1000.
b. Números pares entre 0 y 1000.
c. Números impares entre 0 y 1000.*/

const fibonacci = [];
const secuenciaCeroAMilPares = [];
const secuenciaCeroAMilImpares = [];

fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; fibonacci[fibonacci.length - 1] <= 1000; i++) {
	fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

const fibonacci0y100 = fibonacci.filter((n) => n < 1000);
console.log(
	`Los numeros de la serie fibonacci entre 0 y 1000 son los siguientes: ${fibonacci0y100}`
);

const fibonacciPares = fibonacci.filter((n) => n % 2 == 0 && n < 1000);
console.log(
	`Los numeros pares de la serie fibonacci entre 0 y 1000 son los siguientes: ${fibonacciPares}`
);

const fibonacciImpares = fibonacci.filter((n) => n % 2 == 1 && n < 1000);
console.log(
	`Los numeros impares de la serie fibonacci entre 0 y 1000 son los siguientes: ${fibonacciImpares}`
);

//  1.- Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
let pokeoones = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];
const pokemonesMay = pokeoones.map((poke) => poke.toUpperCase());
console.log("Pokemones en mayuscula: ", pokemonesMay);

//2.- Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.
let pokemones = [
	{
		nombre: "Pikachu",
		tipo: "Electrico",
	},
	{
		nombre: "Charmander",
		tipo: "Fuego",
	},
	{
		nombre: "Bulbasaur",
		tipo: "Planta",
	},
	{
		nombre: "Squirtle",
		tipo: "Agua",
	},
	{
		nombre: "Charmeleon",
		tipo: "Fuego",
	},
	{
		nombre: "Weedle",
		tipo: "bicho",
	},
	{
		nombre: "Charizard",
		tipo: "Fuego",
	},
];

const pokesFuego = pokemones.filter((fuego) => fuego.tipo === "Fuego");
console.log("Los siguientes pokemones son tipo fuego", pokesFuego);
