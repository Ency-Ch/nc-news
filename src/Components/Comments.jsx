import { useEffect, useState } from "react";
import { deleteComment, getAnArticleComments, postComment } from "../utils/api";
import { useParams } from "react-router";
import React from "react";
import Card from "react-bootstrap/Card";

const Comments = (props) => {
  const { article_id } = useParams();
  const { AllComments, setCommentsAll } = props;
  const [submittedComment, setSubmittedComment] = useState("");
  const [newComment, SetNewComment] = useState("");
  const [getComments, setGetComments] = useState(false);

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
      // console.log(response);
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
        ></textarea>
        <li>
          <button className="btn btn-primary">Post Comment</button>
        </li>
      </form>
      <Card>
        <div class="container">
          {AllComments.map((comment) => {
            if (comment.author === "jessjelly") {
              return (
                <div>
                  <Card>
                    <li className="" key={comment.comment_id}>
                      {/* {setCommentVotes(comment.votes)} */}
                      <p>Comment by &nbsp;{comment.author}</p>
                      <p>{comment.body}</p>
                      {/* <p> comment votes{commentVotes}</p> */}
                      <p>comment id {comment.comment_id}</p>
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
                  <p>Comment by &nbsp;{comment.author}</p>
                  <p>{comment.body}</p>
                  <p> comment votes{comment.votes}</p>
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
