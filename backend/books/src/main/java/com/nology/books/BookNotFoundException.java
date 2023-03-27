package com.nology.books;

public class BookNotFoundException extends RuntimeException {
    public BookNotFoundException() {
        super("Book is not in our database. Please submit a form in the add book section.");
    }
}
