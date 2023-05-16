import React from 'react'
import { FaSistrix } from "react-icons/fa";
import mic from '../assets/Google_mic.svg.png'
const Search = ({handleSubmit,search}) => {
  return (
    <div>
      <form action="" className="search">
        <span className="">
          <FaSistrix style={{ color: "#a5aab0" }} />
        </span>
        <input
          type="text"
          className="search-input"
          value={search}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          onChange={handleSubmit}
        />
        <div style={{display: "flex", gap: "8px"}}>
          <img src={mic} alt="" />
          {/* <img src="" alt="" /> */}
        </div>
      </form>
    </div>
  );
}

export default Search
