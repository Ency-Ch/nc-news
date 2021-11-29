import { getSuggestedQuery } from "@testing-library/react";
import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://newsexample.herokuapp.com/api",
});

export const getTopics = () => {
  return newsAPI.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getAllArticles = (topic) => {
  return newsAPI.get("/articles", { params: { topic: topic } }).then((res) => {
    return res.data.articles;
  });
};

export const getSortedArticles = (sort_by) => {
  return newsAPI.get(`/articles?sort_by=${sort_by}`).then((res) => {
    return res.data.articles;
  });
};

export const getAnArticle = (article_id) => {
  return newsAPI.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getAnArticleComments = (article_id) => {
  return newsAPI.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const increaseVotes = (article_id, votesAdded) => {
  return newsAPI
    .patch(`/articles/${article_id}`, { inc_votes: votesAdded })
    .then((res) => {
      return res.data.article.votes;
    });
};
export const getSingleUser = (user) => {
  return newsAPI.get("/users/jessjelly").then((res) => {
    return res.data.user.username;
  });
};

export const postComment = (article_id, postedComment) => {
  return newsAPI
    .post(`/articles/${article_id}/comments`, {
      body: postedComment,
      username: "jessjelly",
    })
    .then((res) => {
      return res;
    });
};
export const deleteComment = (comment_id) => {
  return newsAPI.delete(`/comments/${comment_id}`).then((res) => {
    return res;
  });
};

export const pickSelectedValueFromRadioButton = () => {
  let ele = document.getElementsByName("answer");

  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      return ele[i].value;
    }
  }
};
