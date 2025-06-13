/**
 * Crea una función isBookRead que reciba una lista de libros y un título 
 * y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead
 *  como booleano. En caso de no existir el libro devolver false
 *  TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
 */
function isBookRead(books, titleToSearch) { 
  let isRead = books.find(book =>book.title === titleToSearch )
  return isRead?.isRead ?? false
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: false},
  { title: "Canción de hielo y fuego", isRead: true },
  { title: "Devastación", isRead: false },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false