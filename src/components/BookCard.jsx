import React, { useState } from "react";

const BookCard = ({ book, addBook, removeBook }) => {
  const [isMarked, setIsMarked] = useState(true);
  return (
    <div className="border p-4 rounded shadow-md my-2 w-full max-w-md">
      <h3 className="text-xl font-semibold">{book.title}</h3>
      <p className="text-gray-600">{book.author_name?.join(", ")}</p>
      {addBook && (
        <button
          disabled={!isMarked}
          onClick={() => {
            setIsMarked(false);
            addBook(book);
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isMarked ? "Add to BookList" : "Added"}
        </button>
      )}
      {removeBook && (
        <button
          onClick={() => removeBook(book.key)}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Remove from Booklist
        </button>
      )}
    </div>
  );
};

export default BookCard;
