import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getAnArticle } from "../utils/api";
import { Link } from "react-router-dom";
import ArticleVoter from "./ArticleVoter";
import Card from "react-bootstrap/Card";

const AnArticle = (props) => {
  const { article_id } = useParams();
  const [oneArticle, SetAnArticle] = useState({});
  const [votes, setVotes] = useState(0);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    getAnArticle(article_id)
      .then((response) => {
        SetAnArticle(response);
        setVotes(response.votes);
      })
      .catch((err) => {
        setisError(true);
      });
  }, [article_id]);

  if (isError) {
    return (
      <p className="articles-error">
        article_id not found refresh and try again
      </p>
    );
  }

  return (
    <div id="anarticle">
      <Card>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div>
                <Card.Body>
                  <Card.Title>
                    <h3>{oneArticle.title}</h3>
                  </Card.Title>
                  <p>{oneArticle.body}</p> <p>Votes {votes}</p>{" "}
                  <ArticleVoter
                    votes={votes}
                    setVotes={setVotes}
                    article_id={article_id}
                  />
                  <p> Comments Count {oneArticle.comment_count}</p>
                  <Link to={`/articles/${article_id}/comments`}>
                    Comments
                  </Link>{" "}
                </Card.Body>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AnArticle;
