import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getAnArticle, getAnArticleComments, postComment } from "../utils/api";
import { Link } from "react-router-dom";
import ArticleVoter from "./ArticleVoter";
import Comments from "./Comments";
const AnArticle = (props) => {
  const { article_id } = useParams();
  const [oneArticle, SetAnArticle] = useState({});
  const { setCommentsAll, submittedComment } = props;
  const [votes, setVotes] = useState(0);
  console.log(submittedComment);
  console.log("wagwan here ");
  useEffect(() => {
    getAnArticle(article_id).then((response) => {
      SetAnArticle(response);
      setVotes(response.votes);
    });
    getAnArticleComments(article_id).then((response) => {
      setCommentsAll(response);
    });
  }, [article_id]);
  // useEffect(() => {
  //   postComment(article_id, submittedComment);
  // // }, [submittedComment, article_id]);

  // postComment(article_id, submittedComment);

  return (
    <div>
      <h3>{oneArticle.title}</h3>
      <p>{oneArticle.body}</p>
      <p>
        Votes {votes} Comments Count {oneArticle.comment_count}
      </p>
      <ArticleVoter votes={votes} setVotes={setVotes} article_id={article_id} />
      <Link to={`/articles/${article_id}/comments`}>Comments</Link>
    </div>
  );
};

export default AnArticle;
