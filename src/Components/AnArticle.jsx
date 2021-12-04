import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getAnArticle, getAnArticleComments, postComment } from "../utils/api";
import { Link } from "react-router-dom";
import ArticleVoter from "./ArticleVoter";
import Card from "react-bootstrap/Card";
// import Button from "@restart/ui/esm/Button";

const AnArticle = (props) => {
  const { article_id } = useParams();
  const [oneArticle, SetAnArticle] = useState({});
  const { setCommentsAll } = props;
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getAnArticle(article_id).then((response) => {
      SetAnArticle(response);
      setVotes(response.votes);
    });
  }, [article_id]);

  return (
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
  );
};

export default AnArticle;
