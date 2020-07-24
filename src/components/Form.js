import React, { useState } from "react";
import Search from "../assets/images/search.svg";

function Form({ handleSearch }) {
  const [searchText, setSearchText] = useState("");
  const handleInput = ({ target: { value } }) => {
    setSearchText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
    setSearchText("");
  };

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${"https://source.unsplash.com/user/erondu/1366x660"})`,
        backgroundSize: "Cover",
        height: "500px",
      }}
    >
      <div className="container">
        <div className="form">
          <h1 className="logo">
            Search<span className="text-primary">it</span>
          </h1>
          <h4 className="heading">Free stock photos for everything</h4>
          <form onSubmit={handleSubmit}>
            <div className="search">
              <input
                type="text"
                className="form-control "
                placeholder="Search for images here..."
                value={searchText}
                onChange={handleInput}
              />
              <button type="btn" className="btn btn-primary">
                <img src={Search} alt="search" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
