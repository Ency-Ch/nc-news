import { increaseVotes } from "../utils/api";
import React from "react";
import { useState } from "react";

const ArticleVoter = (props) => {
  const { article_id, setVotes } = props;

  const OnclickIncreaseVotes = () => {
    increaseVotes(article_id, 1).then(() => {
      setVotes((currentVotes) => {
        return currentVotes + 1;
      });
    });
  };
  return <button onClick={OnclickIncreaseVotes}> Vote </button>;
};

export default ArticleVoter;
