import React from "react";
import "./FilterSection.scss";

const FilterSection = ({ bookData, setBookData }) => {
  console.log(bookData);
  const filteredBookData = bookData.filter((book) => {
    if (book.genre.includes("fantasy")) {
      return true;
    }
  });

  return (
    <div className="filter-section">
      <h2 className="filter-section__title">Filter by:</h2>

      <div className="fiction-genre">
        FICTION
        <div className="fiction-genre-options">
          <div className="fiction-genre-options__checks">
            <input type="checkbox" className="fiction-genre__childrens" />
            <input type="checkbox" className="fiction-genre__classic" />
            <input type="checkbox" className="fiction-genre__fantasy" />
            <input type="checkbox" className="fiction-genre__historical" />
            <input type="checkbox" className="fiction-genre__modern" />
            <input type="checkbox" className="fiction-genre__mystery" />
            <input type="checkbox" className="fiction-genre__romance" />
            <input type="checkbox" className="fiction-genre__science" />
          </div>
          <div className="fiction-genre-options__labels">
            <label htmlFor="fiction-genre__childrens">Childrens</label>
            <label htmlFor="fiction-genre__classic">Classic</label>
            <label htmlFor="fiction-genre__fantasy">Fantasy</label>
            <label htmlFor="fiction-genre__historical">Historical</label>
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
            <input type="checkbox" className="non-fiction-genre__biography" />
            <input type="checkbox" className="non-fiction-genre__essays" />
            <input type="checkbox" className="non-fiction-genre__self-help" />
            <input type="checkbox" className="non-fiction-genre__true-crime" />
            <input type="checkbox" className="non-fiction-genre__travel" />
          </div>
          <div className="non-fiction-genre-options__labels">
            <label htmlFor="non-fiction-genre__biography">Biography</label>
            <label htmlFor="non-fiction-genre__essays">Essays</label>
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
