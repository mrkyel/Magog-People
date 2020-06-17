import React from "react";

const SearchBox = () => {
  return (
    <div className="search-wrapper">
      <form>
        <div className="search-wrapper-inner">
          <input />
        </div>
        <div className="search-icon">
          <input type="image" src={require("media/icons/search_icon.png")} />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
