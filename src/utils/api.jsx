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
  console.log("getSortedArticles", sort_by);

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
  return newsAPI
    .get(`/articles/${article_id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
    .catch((err) => {
      return err;
    });
};

export const getAnArticleSortedComments = (article_id, sort_by) => {
  if (sort_by === "asc") {
    return newsAPI
      .get(`/articles/${article_id}/comments/?order=${sort_by}`)
      .then((res) => {
        return res.data.comments;
      })
      .catch((err) => {
        return err;
      });
  }
  if (sort_by === "votes") {
    return newsAPI
      .get(`/articles/${article_id}/comments/?sort_by=${sort_by}`)
      .then((res) => {
        return res.data.comments;
      })
      .catch((err) => {
        return err;
      });
  }
};

export const increaseVotes = (article_id, votesAdded) => {
  return newsAPI
    .patch(`/articles/${article_id}`, { inc_votes: votesAdded })
    .then((res) => {
      return res.data.article.votes;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const decreaseVotes = (article_id, votesAdded) => {
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
    console.log(res);
  });
};

// export const PatchCommentVotes = (comment_id, votesAdded) => {
//   if (votesAdded === 1) {
//     return newsAPI
//       .patch(`/comments/${comment_id}`, { inc_votes: 1 })
//       .then((res) => {
//         return res.data.comment.votes;
//       });
//   }
//   if (votesAdded === -1) {
//     return newsAPI
//       .patch(`/comments/${comment_id}`, { inc_votes: -1 })
//       .then((res) => {
//         return res.data.comment.votes;
//       });
//   }
// };

export const pickSelectedValueFromRadioButton = () => {
  let ele = document.getElementsByName("answer");

  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      return ele[i].value;
    }
  }
};
