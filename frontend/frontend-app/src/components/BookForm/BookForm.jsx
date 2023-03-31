import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import "./BookForm.scss";

const BookForm = ({ defaultFormState, handleSubmit, formTitle }) => {
  const [newBook, setNewBook] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(newBook).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(newBook);
  };
  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <input
          className="form-container__input"
          type="text"
          placeholder="provide the full title of the book..."
          value={newBook.title}
          onInput={(event) =>
            setNewBook({ ...newBook, title: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="provide the author's full name..."
          value={newBook.author}
          onInput={(event) =>
            setNewBook({ ...newBook, author: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="provide the first published date..."
          value={newBook.published}
          onInput={(event) =>
            setNewBook({ ...newBook, published: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="provide the publishing house, date and specify hard or paperback..."
          value={newBook.edition}
          onInput={(event) =>
            setNewBook({ ...newBook, edition: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="number of pages..."
          value={newBook.pages}
          onInput={(event) =>
            setNewBook({ ...newBook, pages: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="list the book's genres here..."
          value={newBook.genre}
          onInput={(event) =>
            setNewBook({ ...newBook, genre: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="write the book's blurb here..."
          value={newBook.blurb}
          onInput={(event) =>
            setNewBook({ ...newBook, blurb: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="paste an image link here..."
          value={newBook.image}
          onInput={(event) =>
            setNewBook({ ...newBook, image: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="write some quotes from the book here..."
          value={newBook.quotes}
          onInput={(event) =>
            setNewBook({ ...newBook, quotes: event.target.value })
          }
        />

        <button type="submit" className="form-container__button">
          <Button buttonText={"Submit"} />
        </button>
      </form>
    </div>
  );
};

export default BookForm;
