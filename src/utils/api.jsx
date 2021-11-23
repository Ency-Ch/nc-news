import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://newsexample.herokuapp.com/api",
});

export const getTopics = () => {
  return newsAPI.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getAllArticles = () => {
  return newsAPI.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getAnArticle = (article_id) => {
  console.log("we here");
  return newsAPI.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};
