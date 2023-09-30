import React, { useState } from "react";
import BackgroungImg from "../images/img1.jpg";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  // Function to perform the search
  const performSearch = () => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyDS89X7z7S0n9B-QY4QEMU00Se6yQ0Z8NY"
      )
      .then((res) => setBookData(res.data.items))
      .catch((err) => console.log(err));
  };

  // Handle changes in the input field
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // Trigger search when input value changes
  React.useEffect(() => {
    performSearch();
  }, [search]); // This will run whenever the 'search' state changes

  return (
    <div>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your Book Name"
              value={search}
              onChange={handleInputChange}
            />
            <button>
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          <img src={BackgroungImg} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="container">{<Card book={bookData} />}</div>
      </div>
    </div>
  );
};

export default Main;
