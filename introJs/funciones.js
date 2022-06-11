// Funcion recursiva que, a) muestre en consola los numeros del 1 al 100 de 1 en 1 b) muestre en consola los numeros del 1000 al 500 de 2 en 2
function mostrarNumeros() {
	for (i = 0; i <= 100; i++) {
		console.log(i);
	}
	for (n = 1000; n >= 500; n -= 2) {
		console.log(n);
	}
}

mostrarNumeros();

// Funciones necesarias para obtener el promedio de notas
// de un alumno considerando que la suma de notas debe ser
// el retorno de una funcion y el promedio el retorno de otra funcion
// notas:6,8,9,2,5,10

const notas = [6, 8, 9, 2, 5, 10];

function promedio(notas) {
	let suma = 0;
	for (let i = 0; i < notas.length; i++) {
		suma += notas[i];
	}
	let prom = suma / notas.length;
	return prom;
}

console.log("El promedio es de ", promedio(notas));
