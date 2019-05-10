class Library {
  constructor(){
    this.books = [];
    this.patrons = [];
  }
  
  addPatron(patron) {
    this.patrons.push(patron);
  }

  addBook(book) {
    this.books.push(book);
  }
}