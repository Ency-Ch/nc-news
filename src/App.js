import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import AllArticles from "./Components/AllArticles";
import AnArticle from "./Components/AnArticle";
import Comments from "./Components/Comments";
import React from "react";
import { useState } from "react";
import SingleUser from "./Components/SingleUser";

function App() {
  const [Articles, SetArticles] = useState([]);
  const [Topics, SetTopics] = useState([]);
  const [AllComments, setCommentsAll] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar
          Topics={Topics}
          SetTopics={SetTopics}
          query={query}
          setQuery={setQuery}
        />
        <SingleUser />
        {/* <Routes>
          <Route path="/topics" element={<Navbar />} />
        </Routes> */}
        <Routes>
          <Route
            path="/articles/:article_id"
            element={
              <AnArticle
                AllComments={AllComments}
                setCommentsAll={setCommentsAll}
              />
            }
          />
          <Route
            path="/articles/:article_id/comments"
            element={
              <Comments
                AllComments={AllComments}
                setCommentsAll={setCommentsAll}
              />
            }
          />
          {/* <Route path="/comments/:comment_id" /> */}
          <Route
            path="/articles"
            element={
              <AllArticles
                Articles={Articles}
                SetArticles={SetArticles}
                query={query}
              />
            }
          />
          <Route
            path="/articles?=query"
            element={
              <AllArticles
                Articles={Articles}
                SetArticles={SetArticles}
                query={query}
              />
            }
          />
          <Route
            path="/topics/:topic"
            element={
              <AllArticles
                Articles={Articles}
                SetArticles={SetArticles}
                query={query}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
