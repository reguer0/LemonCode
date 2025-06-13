/**
 * Clone
Implementa una función clone que, a partir de un objeto de entrada source 
devuelva un nuevo objeto con las propiedades de source:
 */
const clone = (source) => {
    return { ...source }
};
    
    console.log('EJECUTANDO ClLONE');
    console.log(clone({ name: "Maria", surname: "Ibañez", country: "SPA" })); // { name: "Maria", surname: "Ibañez", country: "SPA" }


/**
 * Merge
    Implementa una función merge que, dados dos objetos de entrada source y target,
    devuelva un nuevo objeto con todas las propiedades de target y de source,
    y  en caso de propiedades con el mismo nombre, source sobreescribe a target.
 */
const merge = (source, target) => {
    return { ...target, ...source };
}   

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log('EJECUTANDO MERGE');
console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}