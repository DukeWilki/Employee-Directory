import React, { useState } from "react";
// import ArticleContext from "../../utils/ArticleContext";
import App from "../../App";
import "./style.css";

function SearchResults() {
  const {inputState} = useState(App);
  return (
    <ul className="list-group search-results">
      input: 
              {inputState}
      <li className="list-group-item">
        {/* <h2>{title}</h2> */}
        {/* <a href={url}>{url}</a> */}

      </li>
      {/* console.log(text); */}
    </ul>
  );
}
export default SearchResults;
