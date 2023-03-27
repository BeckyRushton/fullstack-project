package com.nology.books;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class BooksRepository {
    private ArrayList<Book> bookDB = new ArrayList<>();

    public void addBook(Book book) {
        bookDB.add(book);
    }

    public Book getBookById(Long id) {
        for (Book book : bookDB) {
            if (book.getId() == id) {
                return book;
            }
        }
        return null;
    }

    public ArrayList<Book> getAllBooks() {
        return bookDB;
    }

    public boolean hasId(long id) {
        for (Book book : bookDB) {
            if (book.getId() == id) {
                return true;
            }

        }
        return false;
    }
}
