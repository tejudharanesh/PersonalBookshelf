import React from "react";
import BookCard from "./BookCard";

const BookShelf = ({ bookList, removeBook }) => {
  return (
    <div className="flex flex-col items-center">
      {bookList.map((book, index) => (
        <BookCard key={index} book={book} removeBook={removeBook} />
      ))}
    </div>
  );
};

export default BookShelf;
