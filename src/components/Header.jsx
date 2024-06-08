import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Personal booklist</h1>
      <nav>
        <Link to="/" className="mr-4 hover:text-gray-300">
          Search Books
        </Link>
        <Link to="/bookshelf" className="hover:text-gray-300">
          My Books
        </Link>
      </nav>
    </header>
  );
};

export default Header;
