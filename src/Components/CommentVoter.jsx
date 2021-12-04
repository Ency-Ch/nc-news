import { PatchCommentVotes } from "../utils/api";
import { useState } from "react";
import React from "react";
import { useParams } from "react-router";
const CommentVoter = (props) => {
  const {
    individualComment_id,
    setCommentVotes,
    CommentVotes,
    getComments,
    setGetComments,
  } = props;
  const [counter, setCounter] = useState(0);
  const [decreaseCounter, setDecreaseCounter] = useState(0);
  console.log(individualComment_id);
  const OnclickIncreaseVotes = () => {
    if (counter === 0) {
      setCounter(1);
      PatchCommentVotes(individualComment_id, 1).then(() => {
        setCommentVotes((currentVotes) => {
          return currentVotes + 1;
        });
        // setGetComments(!getComments);
      });
    }
  };

  const OnclickdecreaseVotes = () => {
    if (decreaseCounter === 0) {
      setDecreaseCounter(1);
      PatchCommentVotes(individualComment_id, -1).then(() => {
        setCommentVotes((currentVotes) => {
          setGetComments(!getComments);
          return currentVotes - 1;
        });
        // setGetComments(!getComments);
      });
    }
  };
  return (
    <div>
      <button onClick={OnclickIncreaseVotes}> Up Vote </button>
      <button onClick={OnclickdecreaseVotes}> Down Votes </button>
    </div>
  );
};

export default CommentVoter;
