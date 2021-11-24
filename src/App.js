import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import AllArticles from "./Components/AllArticles";
import AnArticle from "./Components/AnArticle";
import React from "react";
import { useState } from "react";

function App() {
  const [Articles, SetArticles] = useState([]);
  const [Topics, SetTopics] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar Topics={Topics} SetTopics={SetTopics} />
        {/* <Routes>
          <Route path="/topics" element={<Navbar />} />
        </Routes> */}
        <Routes>
          <Route path="/articles/:article_id" element={<AnArticle />} />
          {<Route path="/articles/:article_id/comments" />}
          <Route path="/comments/:comment_id" /> }
          <Route
            path="/articles"
            element={
              <AllArticles Articles={Articles} SetArticles={SetArticles} />
            }
          />
          <Route
            path="/topics/:topic"
            element={
              <AllArticles Articles={Articles} SetArticles={SetArticles} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
