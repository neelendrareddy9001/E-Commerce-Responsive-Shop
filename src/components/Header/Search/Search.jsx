import React from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-model">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
    </div>
  );
};

export default Search;
