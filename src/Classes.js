// Data structures

export class Author {
  constructor(email, firstName, lastName) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  create() {
    // logic for creating an instance of an Author class
    return Author;
  }
}

export class Book {
  constructor(title, isbn, authors, description) {
    this.title = title;
    this.isbn = isbn;
    this.authors = authors;
    this.description = description;
  }
  create() {
    // logic for creating an instance of a Book class
    return Book;
  }
}
export class Magazine {
  constructor(title, isbn, authors, publishedAt) {
    this.title = title;
    this.isbn = isbn;
    this.authors = authors;
    this.publishedAt = publishedAt;
  }
  create() {
    // logic for creating an instance of a Magazine class
    return Magazine;
  }
}
