import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";
import AddBook from "./pages/AddBook/AddBook";
import BookData from "./data/bookData.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home bookData={BookData} />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/addbook" element={<AddBook />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
