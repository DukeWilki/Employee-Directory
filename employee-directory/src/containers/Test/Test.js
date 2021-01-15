import React, { useContext } from "react";
import ArticleContext from "../../utils/ArticleContext";
import "./style.css";

function SearchResults() {
  const {input} = useContext(ArticleContext);
  return (
    <ul className="list-group search-results">
              {input}
      <li className="list-group-item">
        {/* <h2>{title}</h2> */}
        {/* <a href={url}>{url}</a> */}

      </li>
      {/* console.log(text); */}
    </ul>
  );
}
export default SearchResults;
