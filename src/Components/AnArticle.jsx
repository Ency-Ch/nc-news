import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getAnArticle } from "../utils/api";

const AnArticle = () => {
  const { article_id } = useParams();
  const [oneArticle, SetAnArticle] = useState({});
  useEffect(() => {
    getAnArticle(article_id).then((response) => {
      SetAnArticle(response);
    });
  }, [article_id]);

  console.log(oneArticle);
  return (
    <div>
      <h3>{oneArticle.title}</h3>

      <p>{oneArticle.body}</p>
      <p>
        Votes {oneArticle.votes} Comments Count {oneArticle.comment_count}
      </p>
      {/* {<p>this is the article</p>
      <p>this is the article comments</p}> */}
    </div>
  );
};

export default AnArticle;
