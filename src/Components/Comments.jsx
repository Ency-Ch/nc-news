import { useEffect, useState } from "react";
import CommentVoter from "./CommentVoter";
import { deleteComment, getAnArticleComments, postComment } from "../utils/api";
import ArticleVoter from "./ArticleVoter";
import AnArticle from "./AnArticle";
import { useParams } from "react-router";
import React from "react";
import Card from "react-bootstrap/Card";

const Comments = (props) => {
  const { article_id } = useParams();
  const { AllComments, setCommentsAll } = props;
  const [submittedComment, setSubmittedComment] = useState("");
  const [newComment, SetNewComment] = useState("");
  const [getComments, setGetComments] = useState(false);
  const [commentVotes, setCommentVotes] = useState(0);

  useEffect(() => {
    if (submittedComment === "") {
      console.log("sub", submittedComment);
      return;
    } else {
      postComment(article_id, submittedComment).then((res) => {
        console.log(res.article_id);
        setGetComments(!getComments);
      });
    }
  }, [submittedComment, article_id]);

  useEffect(() => {
    getAnArticleComments(article_id).then((response) => {
      console.log(response);
      setCommentsAll(response);
    });
  }, []);

  useEffect(() => {
    getAnArticleComments(article_id).then((response) => {
      setCommentsAll(response);
    });
  }, [getComments, newComment]);

  //callback to onClick
  const removeItem = () => {
    // cases useEffect to run GET req which causes setCommentsAll to update => page rerender
    setGetComments(() => !getComments);
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
            e.preventDefault();
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
            if (comment.author === "jessjelly") {
              console.log(comment.comment_id);
              return (
                <div>
                  <Card key={comment.comment_id}>
                    {/* {setCommentVotes(comment.votes)} */}
                    <p>Comment by &nbsp;{comment.author}</p>
                    <p>{comment.body}</p>
                    <p> comment votes{commentVotes}</p>
                    <p>comment id {comment.comment_id}</p>

                    <CommentVoter
                      setCommentVotes={setCommentVotes}
                      commentVotes={commentVotes}
                      individualComment_id={comment.comment_id}
                      getComments={getComments}
                      setGetComments={setGetComments}
                    />
                    <button
                      onClick={() => {
                        // wait for delete to finish then run removeItem
                        deleteComment(comment.comment_id).then(() => {
                          removeItem();
                        });
                      }}
                      id="deleteButton"
                    >
                      delete
                    </button>
                  </Card>
                </div>
              );
            }
            return (
              <div key={comment.comment_id}>
                <Card>
                  {console.log(comment.comment_id)}
                  <p>Comment by &nbsp;{comment.author}</p>
                  <p>{comment.body}</p>
                  <p> comment votes{comment.votes}</p>
                  <CommentVoter
                  //   setCommentVotes={setCommentVotes}
                  //   commentVotes={commentVotes}
                  //   individualComment_id={comment.comment_id}
                  //   getComments={getComments}
                  //   setGetComments={setGetComments}
                  />
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
