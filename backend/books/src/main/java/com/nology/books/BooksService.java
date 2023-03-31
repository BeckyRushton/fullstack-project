package com.nology.books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BooksService {
@Autowired
    BooksRepository booksRepository;

public void addBook(Book book) {
    booksRepository.save(book);
}
   public Optional<Book> getBookById(Long id){
    if(!booksRepository.existsById(id)) {
        throw new BookNotFoundException();
    } return booksRepository.findById(id);
   }

    public ArrayList<Book> getAllBooks() {
    return (ArrayList<Book>) booksRepository.findAll().stream().collect(Collectors.toList());
    }
    public void deleteBookById(Long id) {
    booksRepository.deleteById(id);
    }
}
