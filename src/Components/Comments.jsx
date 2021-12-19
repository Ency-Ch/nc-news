import { useEffect, useState } from "react";
import {
  deleteComment,
  getAnArticleComments,
  postComment,
  getAnArticleSortedComments,
} from "../utils/api";
import { useParams } from "react-router";
import React from "react";
import Card from "react-bootstrap/Card";
import { pickSelectedValueFromRadioButton } from "../utils/api";

const Comments = (props) => {
  const { article_id } = useParams();
  const { AllComments, setCommentsAll } = props;
  const [submittedComment, setSubmittedComment] = useState("");
  const [newComment, SetNewComment] = useState("");
  const [getComments, setGetComments] = useState(false);
  const [order_by, setOrder_by] = useState("");

  useEffect(() => {
    if (submittedComment === "") {
      return;
    } else {
      postComment(article_id, submittedComment).then((res) => {
        console.log(res.article_id);
        setGetComments(!getComments);
      });
    }
  }, [submittedComment, article_id]);

  useEffect(() => {
    getAnArticleComments(article_id)
      .then((response) => {
        setCommentsAll(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getComments, newComment]);

  //callback to onClick
  const removeItem = () => {
    // cases useEffect to run GET req which causes setCommentsAll to update => page rerender
    setGetComments(() => !getComments);
  };

  useEffect(() => {
    if (order_by === "") {
      return;
    }
    console.log(order_by);
    getAnArticleSortedComments(article_id, order_by)
      .then((response) => {
        console.log(response);
        setCommentsAll(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [order_by]);

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
        <ul></ul>
        <h2>new comment</h2>
        <label htmlFor="new-comment"></label>
        <textarea
          type="text"
          id="new-comment"
          onChange={(e) => {
            e.preventDefault();
            SetNewComment(e.target.value);
          }}
          value={newComment}
          required
          className="mt-0 text-center "
          placeholder="Enter a comment here "
        ></textarea>
        <li>
          <button className="btn btn-primary">Post Comment</button>
        </li>
      </form>
      <Card>
        <div className="container">
          <div className="row">
            <h5>order comments by </h5>
            <p id="QueryError"></p>
            <div className="col">
              <form>
                <div className="form-check pr-5 mt-1">
                  <label className="radio form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="answer"
                      value="asc"
                    ></input>
                    ascending
                  </label>
                </div>
                <div className="form-check p-2">
                  <label className="radio form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="answer"
                      value="votes"
                    ></input>
                    votes
                  </label>
                </div>
                <div className="p-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm text-center  "
                    onClick={(e) => {
                      e.preventDefault();
                      let thequery = pickSelectedValueFromRadioButton();
                      if (thequery === undefined) {
                        document.getElementById("QueryError").innerHTML =
                          "invalid query please refresh page and try again";
                      } else {
                        document.getElementById("QueryError").innerHTML = "";
                        setOrder_by(thequery);
                      }
                    }}
                  >
                    click to order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          {AllComments.map((comment) => {
            if (comment.author === "jessjelly") {
              return (
                <div key={comment.comment_id}>
                  <Card>
                    <li>
                      <p className="comment-analytic">
                        Comment by &nbsp;{comment.author}
                      </p>
                      <p>{comment.body}</p>
                      <p className="comment-analytic">
                        comment votes{comment.votes}
                      </p>
                      <button
                        onClick={() => {
                          // wait for delete to finish then run removeItem
                          deleteComment(comment.comment_id).then(() => {
                            removeItem();
                          });
                        }}
                        id="deleteButton"
                        className="btn btn btn-danger"
                      >
                        delete
                      </button>
                    </li>
                  </Card>
                </div>
              );
            }
            return (
              <div key={comment.comment_id}>
                <Card>
                  <p className="comment-analytic">
                    Comment by &nbsp;{comment.author}
                  </p>
                  <p>{comment.body}</p>
                  <p className="comment-analytic">
                    {" "}
                    comment votes &nbsp;{comment.votes}
                  </p>
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
