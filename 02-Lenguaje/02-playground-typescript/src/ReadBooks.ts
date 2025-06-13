/**
 * Crea una función isBook que reciba una lista de libros y un título 
 * y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead
 *  como booleano. En caso de no existir el libro devolver false
 *  TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
 */

interface Book {
  title: string;
  isRead: boolean;
}

const isBookRead =(books: Book[], titleToSearch: string): boolean => { 
  const book = books.find(book => book.title === titleToSearch);
  return book?.isRead ?? false;
}

const bookList: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: false },
  { title: "Canción de hielo y fuego", isRead: true },
  { title: "Devastación", isRead: false },
];


console.log(isBookRead(bookList, "Harry Potter y la piedra filosofal")); // false
console.log(isBookRead(bookList, "Canción de hielo y fuego")); // true
console.log(isBookRead(bookList, "Devastación")); // false