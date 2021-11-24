import React, { useState } from "react";
import { getAllArticles } from "../utils/api";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const AllArticles = (props) => {
  const { topic } = useParams();
  const { SetArticles, Articles } = props;
  useEffect(() => {
    getAllArticles(topic).then((response) => {
      SetArticles(response);
    });
  }, [topic]);

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

export default AllArticles;
