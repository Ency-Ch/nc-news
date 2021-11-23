import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import AllArticlesTitles from "./Components/AllArticlesTitles";
import AnArticle from "./Components/AnArticle";
import React from "react";
import { useState } from "react";
import Topics from "./Components/Topics";

function App() {
  const [Articles, SetArticles] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        {/* <Routes>
          <Route path="/topics" element={<Navbar />} />
        </Routes> */}
        <Routes>
          <Route path="/articles/:article_id" element={<AnArticle />} />
          {/* <Route path="/articles/:article_id/comments" />
          <Route path="/comments/:comment_id" /> */}
        </Routes>
        <Routes>
          <Route
            path="/articles"
            element={
              <AllArticlesTitles
                Articles={Articles}
                SetArticles={SetArticles}
              />
            }
          />
        </Routes>
        <Routes>
          <Route path="/topics" element={<Topics Articles={Articles} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
