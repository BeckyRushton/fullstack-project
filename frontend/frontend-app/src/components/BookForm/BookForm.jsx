import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import "./BookForm.scss";

const BookForm = ({ defaultFormState, handleSubmit, formTitle }) => {
  const [newBook, setNewBook] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();
    if (isNaN(newBook.pages)) {
      alert("Number of pages must be a number");
    }
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
        <div className="form-container__form--labels">
          <label htmlFor="bookTitle">Title:</label>
          <label htmlFor="bookAuthor">Author:</label>
          <label htmlFor="bookPublished">Published:</label>
          <label htmlFor="bookEdition">Edition:</label>
          <label htmlFor="bookPages">Pages:</label>
          <label htmlFor="bookGenres">Genre:</label>
          <label htmlFor="bookBlurb">Blurb:</label>
          <label htmlFor="bookImage">Image:</label>
          <label htmlFor="bookQuotes">Quotes:</label>
        </div>
        <div className="form-container__form--inputs">
          {" "}
          <input
            className="form-container__input"
            id="bookTitle"
            type="text"
            placeholder="provide the full title of the book..."
            value={newBook.title}
            onInput={(event) =>
              setNewBook({ ...newBook, title: event.target.value })
            }
          />
          <input
            className="form-container__input"
            id="bookAuthor"
            type="text"
            placeholder="provide the author's full name..."
            value={newBook.author}
            onInput={(event) =>
              setNewBook({ ...newBook, author: event.target.value })
            }
          />
          <input
            className="form-container__input"
            id="bookPublished"
            type="text"
            placeholder="provide the first published date..."
            value={newBook.published}
            onInput={(event) =>
              setNewBook({ ...newBook, published: event.target.value })
            }
          />
          <input
            className="form-container__input"
            id="bookEdition"
            type="text"
            placeholder="provide the publishing house, date published and hardback/paperback..."
            value={newBook.edition}
            onInput={(event) =>
              setNewBook({ ...newBook, edition: event.target.value })
            }
          />
          <input
            className="form-container__input"
            id="bookPages"
            type="text"
            placeholder="provide a number for the pages..."
            value={newBook.pages}
            onInput={(event) =>
              setNewBook({ ...newBook, pages: event.target.value })
            }
          />
          <input
            className="form-container__input"
            id="bookGenres"
            type="text"
            placeholder="to list multiple genres, please separate with a comma..."
            value={newBook.genre}
            onInput={(event) => {
              const genreArr = event.target.value.split(",");
              setNewBook({ ...newBook, genre: genreArr });
            }}
          />
          <input
            className="form-container__input"
            id="bookBlurb"
            type="text"
            placeholder="provide the book's blurb..."
            value={newBook.blurb}
            onInput={(event) =>
              setNewBook({ ...newBook, blurb: event.target.value })
            }
          />
          <input
            className="form-container__input"
            id="bookImage"
            type="text"
            placeholder="paste an image link..."
            value={newBook.image}
            onInput={(event) =>
              setNewBook({ ...newBook, image: event.target.value })
            }
          />
          <input
            className="form-container__input"
            id="bookQuotes"
            type="text"
            placeholder="To write multiple quotes, please separate with a full stop..."
            onInput={(event) => {
              const quoteArr = event.target.value.split(".");
              setNewBook({ ...newBook, quotes: quoteArr });
            }}
          />
        </div>
      </form>
      <button type="submit" className="form-container__button">
        <Button buttonText={"Submit"} />
      </button>
    </div>
  );
};

export default BookForm;
