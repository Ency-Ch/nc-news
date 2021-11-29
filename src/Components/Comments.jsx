import { useEffect, useState } from "react";
import { deleteComment, getAnArticleComments, postComment } from "../utils/api";
import AnArticle from "./AnArticle";
import { useParams } from "react-router";
import React from "react";
import Card from "react-bootstrap/Card";

const Comments = (props) => {
  const { article_id } = useParams();
  const { AllComments } = props;
  const [submittedComment, setSubmittedComment] = useState("");
  const [newComment, SetNewComment] = useState("");
  const [] = useState();

  useEffect(() => {
    postComment(article_id, submittedComment).then((res) => {
      console.log(res);
    });
  }, [submittedComment, article_id]);
  const handleDelete = (commentid) => {
    deleteComment(commentid);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmittedComment(newComment);
          SetNewComment("");
          //we could have posted it here
        }}
      >
        <label htmlFor="new-comment">new comment</label>
        <textarea
          type="text"
          id="new-comment"
          onChange={(e) => {
            SetNewComment(e.target.value);
          }}
          value={newComment}
          required
        ></textarea>
        <button>Post Comment</button>
      </form>
      <Card>
        <div class="container">
          {AllComments.map((comment) => {
            return (
              <div>
                <Card>
                  <p>Comment by &nbsp;{comment.author}</p>
                  <p>Comment number&nbsp;&nbsp;{comment.comment_id}</p>
                  <p>{comment.body}</p>
                  <button onClick={handleDelete(comment.comment_id)}>
                    delete
                  </button>
                </Card>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Comments;
