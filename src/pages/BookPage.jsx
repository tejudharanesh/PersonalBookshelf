import React from "react";
import BookShelf from "../components/BookShelf";

const BookPage = ({ bookList, removeBook }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Book List</h2>
      <BookShelf bookList={bookList} removeBook={removeBook} />
    </div>
  );
};

export default BookPage;
