
/*
HEAD
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga 
y devuelva su primer elemento. Utiliza destructuring.
*/
console.log('EJECUTANDO HEAD');
const head = ([item]) => item; // Implementation here.

console.log(head([1, 2, 3])); // 1
console.log(head(['a', 'b', 'c'])); // 'a'
console.log(head([])); // undefined



/**
Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos
 menos el primer elemento. Utiliza rest operator.
 */
console.log('EJECUTANDO TAIL');
const tail = ([,...items]) => items; // Implementation here.

console.log(tail([1, 2, 3])); // [2, 3]
console.log(tail(['a', 'b', 'c'])); // ['b', 'c']
console.log(tail([])); // []



/**
 * Init
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva
 todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
  */

console.log('EJECUTANDO INIT');
const init = (array) => array.slice(0, -1); // Implementation here.

console.log(init([1, 2, 3])); // [1, 2]
console.log(init(['a', 'b', 'c'])); // ['a', 'b']
console.log(init([])); // []


/**
 * Last
Implementa una función last (inmutable), tal que, 
dado un array como entrada devuelva el último elemento.
 */
console.log('EJECUTANDO LAST');
const last = (array) => array[array.length - 1]; // Implementation here.

console.log(last([1, 2, 3])); // 3
console.log(last(['a', 'b', 'c'])); // 'c'
console.log(last([])); // undefined
