import React from "react";
import BookCard from "./BookCard";

const SearchResults = ({ results, addBook }) => {
  return (
    <div className="flex flex-col items-center">
      {results.map((book, index) => (
        <BookCard key={index} book={book} addBook={addBook} />
      ))}
    </div>
  );
};

export default SearchResults;
