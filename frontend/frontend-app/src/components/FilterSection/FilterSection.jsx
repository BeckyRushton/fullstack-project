import React from "react";
import "./FilterSection.scss";

const FilterSection = ({ bookData, setBookData, handleSearchGenres }) => {
  return (
    <div className="filter-section">
      <h2 className="filter-section__title">Filter by:</h2>

      <div className="fiction-genre">
        FICTION
        <div className="fiction-genre-options">
          <div className="fiction-genre-options__checks">
            <input
              genre="childrens"
              onClick={handleSearchGenres}
              type="checkbox"
              className="fiction-genre__childrens"
            />
            <input
              genre="classic"
              onClick={handleSearchGenres}
              type="checkbox"
              className="fiction-genre__classic"
            />
            <input
              genre="fantasy"
              onClick={handleSearchGenres}
              type="checkbox"
              className="fiction-genre__fantasy"
            />
            <input
              genre="history"
              onClick={handleSearchGenres}
              type="checkbox"
              className="fiction-genre__history"
            />
            <input
              genre="modern"
              onClick={handleSearchGenres}
              type="checkbox"
              className="fiction-genre__modern"
            />
            <input
              genre="mystery"
              onClick={handleSearchGenres}
              type="checkbox"
              className="fiction-genre__mystery"
            />
            <input
              genre="romance"
              onClick={handleSearchGenres}
              type="checkbox"
              className="fiction-genre__romance"
            />
            <input
              genre="science"
              onClick={handleSearchGenres}
              type="checkbox"
              className="fiction-genre__science"
            />
          </div>
          <div className="fiction-genre-options__labels">
            <label htmlFor="fiction-genre__childrens">Childrens</label>
            <label htmlFor="fiction-genre__classic">Classic</label>
            <label htmlFor="fiction-genre__fantasy">Fantasy</label>
            <label htmlFor="fiction-genre__history">History</label>
            <label htmlFor="fiction-genre__modern">Modern</label>
            <label htmlFor="fiction-genre__mystery">Mystery</label>
            <label htmlFor="fiction-genre__romance">Romance</label>
            <label htmlFor="fiction-genre__science">Science</label>
          </div>
        </div>
      </div>
      <div className="non-fiction-genre">
        NON-FICTION
        <div className="non-fiction-genre-options">
          <div className="non-fiction-genre-options__checks">
            <input
              genre="biography"
              onClick={handleSearchGenres}
              type="checkbox"
              className="non-fiction-genre__biography"
            />
            <input
              genre="essays"
              onClick={handleSearchGenres}
              type="checkbox"
              className="non-fiction-genre__essays"
            />
            <input
              genre="feminism"
              onClick={handleSearchGenres}
              type="checkbox"
              className="non-fiction-genre__feminism"
            />
            <input
              genre="self-help"
              onClick={handleSearchGenres}
              type="checkbox"
              className="non-fiction-genre__self-help"
            />
            <input
              genre="true-crime"
              onClick={handleSearchGenres}
              type="checkbox"
              className="non-fiction-genre__true-crime"
            />
            <input
              genre="travel"
              onClick={handleSearchGenres}
              type="checkbox"
              className="non-fiction-genre__travel"
            />
          </div>
          <div className="non-fiction-genre-options__labels">
            <label htmlFor="non-fiction-genre__biography">Biography</label>
            <label htmlFor="non-fiction-genre__essays">Essays</label>
            <label htmlFor="non-fiction-genre__feminism">Feminism</label>
            <label htmlFor="non-fiction-genre__self-help">Self-help</label>
            <label htmlFor="non-fiction-genre__true-crime">True-crime</label>
            <label htmlFor="non-fiction-genre__travel">Travel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
