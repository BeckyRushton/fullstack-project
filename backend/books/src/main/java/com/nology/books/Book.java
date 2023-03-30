package com.nology.books;

import javax.persistence.*;
import java.util.ArrayList;
@Entity

public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String author;
    private String published;
    private String edition;
    private long pages;

    private ArrayList<String> genre;
    private String image;

    private ArrayList<String> quotes;
    private String blurb;

    public Book() {
    }

    public Book(long id, String title, String author, String published, String edition, long pages, ArrayList<String> genre, String image, ArrayList<String> quotes, String blurb) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.published = published;
        this.edition = edition;
        this.pages = pages;
        this.genre = genre;
        this.image = image;
        this.quotes = quotes;
        this.blurb = blurb;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublished() {
        return published;
    }

    public void setPublished(String published) {
        this.published = published;
    }

    public String getEdition() {
        return edition;
    }

    public void setEdition(String edition) {
        this.edition = edition;
    }

    public long getPages() {
        return pages;
    }

    public void setPages(long pages) {
        this.pages = pages;
    }

    public ArrayList<String> getGenre() {
        return genre;
    }

    public void setGenre(ArrayList<String> genre) {
        this.genre = genre;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public ArrayList<String> getQuotes() {
        return quotes;
    }

    public void setQuotes(ArrayList<String> quotes) {
        this.quotes = quotes;
    }

    public String getBlurb() {
        return blurb;
    }

    public void setBlurb(String blurb) {
        this.blurb = blurb;
    }
}
