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

export const getAnArticle = (article_id) => {
  return newsAPI.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

// export const getAnArticleandComments = (article_id) => {
//   return newsAPI.get(`/articles/${article_id}/comments`).then((res) => {
//     console.log(res);
//   });
// };
