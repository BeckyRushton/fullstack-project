import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";
import AddBook from "./pages/AddBook/AddBook";
import AllBooks from "./pages/AllBooks/AllBooks";

function App() {
  const [showBooks, setShowBooks] = useState(false);
  const [bookData, setBookData] = useState([]);
  const fetchBooks = async () => {
    const res = await fetch("http://localhost:8080/books");
    const bookDB = await res.json();
    console.log(bookDB);
    setBookData(bookDB);
    setShowBooks(true);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Home bookData={bookData} setBookData={setBookData} />}
          ></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/addbook" element={<AddBook />}></Route>
          <Route path="/allbooks" element={<AllBooks />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
