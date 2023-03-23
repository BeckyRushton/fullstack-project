package com.nology.books;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.FileReader;
import java.time.LocalDate;
import java.util.ArrayList;

@Component
public class BooksInitialiser {

    private final BooksRepository booksRepository;

    @Value("classpath:books.json")
    private Resource resourceFile;


    @Autowired
    public BooksInitialiser(BooksRepository booksRepository) {
        this.booksRepository = booksRepository;
    }

    @PostConstruct
    public void populateBooks() {
        JSONParser jsonParser = new JSONParser();
        try (FileReader reader = new FileReader(resourceFile.getFile())) {
            Object obj = jsonParser.parse(reader);

            JSONArray jsonArray = (JSONArray) obj;

            for (Object book : jsonArray) {
                JSONObject bookJSON = (JSONObject) book;
                long id = (long) bookJSON.get("id");
                String title = (String) bookJSON.get("title");
                String author = (String) bookJSON.get("author");
                String published = (String) bookJSON.get("published");
                String edition = (String) bookJSON.get("edition");
                long pages = (long) bookJSON.get("pages");
                ArrayList<String> genre = (ArrayList<String>) bookJSON.get("genre");
                String image = (String) bookJSON.get("image");
                ArrayList<String> quotes = (ArrayList<String>) bookJSON.get("quotes");
                String blurb = (String) bookJSON.get("blurb");
                booksRepository.addBook(new Book(id, title, author, published, edition, pages, genre, image, quotes, blurb));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
