/** @format */
import React from "react";
import logo from "../assets/googlelogo_light_color_272x92dp.png";
import Search from "./Search";
import Button from "./Button";
const SearchSection = ({handleSubmit,search}) => {
  return (
    <div>
      <img
        src={logo}
        alt=""
        style={{  height: " 100px" }}
      />
      <Search handleSubmit={handleSubmit} search={search} />
      <div className="search-buttons">
        <Button text={"Google Search"} />
        <Button text={"I'm feeling Lucky"} />
      </div>
    </div>
  );
};

export default SearchSection;