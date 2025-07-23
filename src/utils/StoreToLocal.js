class storeToLocal {
  static getBooks() {
    const data = localStorage.getItem('myLibrary');
    return data ? JSON.parse(data) : [];
  }

  static addBooks(book) {
    const books = storeToLocal.getBooks();
    books.push(book);
    localStorage.setItem('myLibrary', JSON.stringify(books));
  }

  static removeBooks(id) {
    const books = storeToLocal.getBooks();
    const filtered = books.filter(book => book.id !== id);
    localStorage.setItem('myLibrary', JSON.stringify(filtered));
  }

  static updateBook(updatedBook) {
    const books = storeToLocal.getBooks();
    const updatedBooks = books.map(book =>
      book.id === updatedBook.id ? updatedBook : book
    );
    localStorage.setItem('myLibrary', JSON.stringify(updatedBooks));
  }

  static getBookById(id) {
    const books = storeToLocal.getBooks();
    return books.find(book => book.id === id);
  }
}

export default storeToLocal;
