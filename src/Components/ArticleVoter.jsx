import { increaseVotes, decreaseVotes } from "../utils/api";
import React from "react";
import { useState } from "react";

const ArticleVoter = (props) => {
  const { article_id, setVotes } = props;
  const [counter, setCounter] = useState(0);
  const [decreaseCounter, setDecreaseCounter] = useState(0);
  const OnclickIncreaseVotes = () => {
    if (counter === 0) {
      setCounter(1);
      increaseVotes(article_id, 1).then(() => {
        setVotes((currentVotes) => {
          return currentVotes + 1;
        });
      });
    }
  };

  const OnclickdecreaseVotes = () => {
    if (decreaseCounter === 0) {
      setDecreaseCounter(1);
      decreaseVotes(article_id, -1).then(() => {
        setVotes((currentVotes) => {
          return currentVotes - 1;
        });
      });
    }
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={OnclickIncreaseVotes}
      >
        {" "}
        Up Vote{" "}
      </button>

      <button
        type="button"
        className="btn btn-danger"
        onClick={OnclickdecreaseVotes}
      >
        {" "}
        Down Votes{" "}
      </button>
    </div>
  );
};

export default ArticleVoter;
