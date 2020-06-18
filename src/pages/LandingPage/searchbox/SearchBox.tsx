import React from "react";
import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <div className="search-wrapper">
      <form>
        <div className="searchbox-wrapper">
          <div className="search-input">
            <input type="text" placeholder="검색어를 입력하세요" />
          </div>
          <div className="search-icon">
            <input
              type="image"
              src={require("media/icons/search_icon.png")}
              width="44"
              height="35"
              alt="돋보기 아이콘"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
