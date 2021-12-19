import React, { useState } from "react";
import { getAllArticles, getSortedArticles } from "../utils/api";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import SortArticles from "./SortArticles";

const AllArticles = (props) => {
  const { topic } = useParams();
  const { SetArticles, Articles, query, setQuery } = props;
  const [isError, setisError] = useState(false);

  useEffect(() => {
    if (query === "") {
      return;
    }
    if (query !== "" || query !== null || query !== undefined) {
      getSortedArticles(query).then((response) => {
        SetArticles(response);
      });
    }
  }, [query, SetArticles]);

  useEffect(() => {
    getAllArticles(topic)
      .then((response) => {
        SetArticles(response);
      })
      .catch((err) => {
        setisError(true);
      });
  }, [topic, SetArticles]);

  useEffect(() => {});

  if (isError) {
    return <p>articles or topics or query are not found</p>;
  }

  return (
    <div>
      <SortArticles setQuery={setQuery} />
      <h1> Articles</h1>
      {Articles.map(({ title, article_id }) => {
        return (
          <div className="span" key={article_id}>
            <div className="ul">
              <li key={article_id}>
                <Link key={article_id} to={`/articles/${article_id}`}>
                  {title}
                </Link>
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllArticles;
