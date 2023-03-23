package com.nology.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class BooksController {
    @Autowired
    BooksRepository booksRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/books")
    public ArrayList<Book> getAllBooks() {
        return booksRepository.getAllBooks();
    }
}
