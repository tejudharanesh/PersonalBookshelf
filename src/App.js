import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BookPage from "./pages/BookPage";
import SearchBook from "./pages/SearchBook";
import "./index.css";

const App = () => {
  const [bookList, setBookList] = useState([]);

  const addBook = (book) => {
    const updatedBook = [...bookList, book];
    setBookList(updatedBook);
  };

  const removeBook = (key) => {
    const updatedBook = bookList.filter((book) => book.key !== key);
    setBookList(updatedBook);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SearchBook addBook={addBook} />} />
        <Route
          path="/bookshelf"
          element={<BookPage bookList={bookList} removeBook={removeBook} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
