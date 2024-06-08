import React, { useState } from "react";
import axios from "axios";
import SearchResults from "../components/SearchResults";

const SearchBook = ({ addBook }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const q = e.target.value;
    setQuery(q);
    if (q.length > 2) {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${q}&limit=10&page=1`
      );
      setResults(response.data.docs);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={handleSearch}
        className="border p-2 w-full max-w-md"
      />
      <SearchResults results={results} addBook={addBook} />
    </div>
  );
};

export default SearchBook;
