package com.nology.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class BooksController {

    @Autowired
    BooksService booksService;

    @ExceptionHandler
    public String handleExceptions(BookNotFoundException exception){
        return exception.getMessage();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/books")
    public ArrayList<Book> getAllBooks() {
        return booksService.getAllBooks();
    }


    @PostMapping("/book")
    public Book createBook(@RequestBody Book book){
        booksService.addBook(book);
        return book;
    }
    @GetMapping("/books/{id}")
    public ArrayList<Book> getBookById(@PathVariable long id) {
        return booksService.getBookById(id);
    }
}
