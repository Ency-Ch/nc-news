import React from "react";
import { useEffect, useState } from "react";
import { getSortedArticles } from "../utils/api";

const SortedArticles = () => {
  const [sortedArticles, SetSortedArticles] = useState([]);

  const HandleSorted = (sortby) => {
    useEffect(() => {
      getSortedArticles(sortby).then((res) => {
        SetSortedArticles(res);
      });
    }, [sortby]);
  };

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};
export default SortedArticles;
