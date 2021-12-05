import React, { useState } from "react";
import { getAllArticles, getSortedArticles } from "../utils/api";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FormGroup, ListGroup } from "react-bootstrap";
import SortArticles from "./SortArticles";
const AllArticles = (props) => {
  const { topic } = useParams();
  const { SetArticles, Articles, query, setQuery } = props;

  useEffect(() => {
    console.log(query);
    if (query !== "" || query !== null || query !== undefined) {
      getSortedArticles(query).then((response) => {
        SetArticles(response);
        console.log(Articles, query, "articles");
      });
    }
  }, [query]);

  useEffect(() => {
    if (query === "" || query === null || query !== undefined) {
      getAllArticles(topic).then((response) => {
        SetArticles(response);
      });
    }
  }, [topic]);

  return (
    <div>
      <h1> Articles</h1>
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
