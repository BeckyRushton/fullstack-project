import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";
import AddBook from "./pages/AddBook/AddBook";

function App() {
  const fetchBooks = async () => {
    const res = await fetch("http://localhost:8080/books");
    const data = await res.json();
    console.log(data);
  };
  fetchBooks();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/addbook" element={<AddBook />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
