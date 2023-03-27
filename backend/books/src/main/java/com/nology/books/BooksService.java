package com.nology.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class BooksService {
@Autowired
    BooksRepository booksRepository;

public void addBook(Book book) {
    booksRepository.addBook(book);
}
   public ArrayList<Book> getBookById(long id){
    if(!booksRepository.hasId(id)) {
        throw new BookNotFoundException();
    } return booksRepository.getAllBooks();
   }

    public ArrayList<Book> getAllBooks() {
    return (ArrayList<Book>) booksRepository.getAllBooks().stream().collect(Collectors.toList());
    }
}
