import { useEffect, useState } from "react";
import { getAnArticleComments } from "../utils/api";
import AnArticle from "./AnArticle";
import { useParams } from "react-router";
import React from "react";

const Comments = (props) => {
  const { AllComments, setSubmittedComment, submittedComment } = props;
  // const [submitedComment, setSubmittedComment] = useState("");
  const [newComment, SetNewComment] = useState("");
  console.log(submittedComment);
  // console.log(newComment);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //put newsearch in the search button
          setSubmittedComment(newComment);
          SetNewComment("");
        }}
      >
        <label htmlFor="newcomment">new post</label>
        <input
          type="text"
          id="new-comment"
          onChange={(e) => {
            SetNewComment(e.target.value);
          }}
          value={newComment}
          required
        />
        <button>Post Comment</button>
      </form>

      <div className="h2">Comments</div>
      {AllComments.map((comment) => {
        return <p>{comment.body}</p>;
      })}
    </div>
  );
};

export default Comments;
