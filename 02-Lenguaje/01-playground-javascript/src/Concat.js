/**
 * Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, 
 * devuelva la concatenación de ambos. Utiliza rest / spread operators.
 */

const concat = (a, b) => a.concat(b); 
const concatSpreed = (array1, array2) => [...array1, ...array2]; 


console.log('EJECUTANDO CONCAT');
console.log(concat([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(concat(['a', 'b'], ['c', 'd'])); // ['a', 'b', 'c', 'd']
console.log(concat([], [])); // []

/**
 * Opcional
Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2).
 No utilices el método Array.prototype.concat.
 */
const concatMultiple = (...arrays) => {
  return arrays.reduce((acc, curr) => [...acc, ...curr], []);
}

console.log('EJECUTANDO CONCAT MULTIPLE');
console.log(concatMultiple([1, 2], [3, 4], [5])); // [1, 2, 3, 4, 5]
console.log(concatMultiple(['a', 'b'], ['c', 'd'], ['e'])); // ['a', 'b', 'c', 'd', 'e']
