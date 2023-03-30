package com.nology.books;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.chrono.Era;

@Repository
public interface BooksRepository extends JpaRepository<Book, Long> {

}
