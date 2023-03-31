import React from "react";
import "./NewBook.scss";
import BookForm from "../../components/BookForm/BookForm";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";

const NewBook = () => {
  const handleSubmit = async (book) => {
    console.log(book);
    const result = await fetch("http://localhost:8080/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    if (result.ok) {
      alert("Book added");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {
    title: "",
    author: "",
    published: "",
    edition: "",
    pages: "",
    genre: [""],
    blurb: "",
    image: "",
    quotes: [""],
  };

  return (
    <div className="create-newBook">
      <PageHeader />
      <div className="create-newBook__body">
        <BookForm
          handleSubmit={handleSubmit}
          defaultFormState={defaultFormState}
          formTitle="Add A New Book"
        />
      </div>
      <Footer />
    </div>
  );
};

export default NewBook;
