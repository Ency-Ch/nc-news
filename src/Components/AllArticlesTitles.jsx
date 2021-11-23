import React, { useState } from "react";
import { getAllArticles } from "../utils/api";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const AllArticlesTitles = (props) => {
  const { SetArticles, Articles } = props;
  useEffect(() => {
    getAllArticles().then((response) => {
      SetArticles(response);
    });
  }, []);

  return (
    <div>
      {Articles.map(({ title, article_id }) => {
        return (
          <div className="span">
            <div className="ul">
              <li key={article_id}>
                <Link to={`/articles/${article_id}`}>{title}</Link>
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllArticlesTitles;
