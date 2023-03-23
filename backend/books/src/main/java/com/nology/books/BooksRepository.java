package com.nology.books;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class BooksRepository {
    private ArrayList<Book> bookDB = new ArrayList<>();

    public void addBook(Book book) {
        bookDB.add(book);
    }

    public ArrayList<Book> getAllBooks() {
        return bookDB;
    }
}
