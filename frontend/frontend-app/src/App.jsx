import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";
import AllBooks from "./pages/AllBooks/AllBooks";
import NewBook from "./pages/NewBook/NewBook";

function App() {
  const [showBooks, setShowBooks] = useState(false);
  const [bookData, setBookData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchGenres, setSearchGenres] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch("http://localhost:8080/books");
    let bookDB = await res.json();

    bookDB = bookDB.filter((book) => {
      if (
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
      ) {
        if (searchGenres.length === 0) {
          return true;
        }

        for (const genre of searchGenres) {
          if (book.genre.includes(genre)) {
            return true;
          }
        }
      }
    });

    setBookData(bookDB);
    setShowBooks(true);
  };

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, searchGenres]);

  const handleSearchGenres = (event) => {
    const genre = event.target.getAttribute("genre");
    const checked = event.target.checked;
    if (checked) {
      setSearchGenres([genre, ...searchGenres]);
    } else {
      let newSearchGenres = searchGenres.filter((checkedGenre) => {
        if (checkedGenre !== genre) {
          return true;
        }
      });
      setSearchGenres([...newSearchGenres]);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                bookData={bookData}
                setBookData={setBookData}
                handleSearch={handleSearch}
                handleSearchGenres={handleSearchGenres}
              />
            }
          ></Route>
          <Route
            path={`/book/:title`}
            element={<Book bookData={bookData} />}
          ></Route>
          <Route
            path="/allbooks"
            element={
              <AllBooks
                bookData={bookData}
                setBookData={setBookData}
                handleSearch={handleSearch}
              />
            }
          ></Route>
          <Route path="/newbook" element={<NewBook />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
