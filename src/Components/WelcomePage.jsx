import React from "react";
import AllArticles from "./AllArticles";
import { Link } from "react-router-dom";

const WelcomePage = (props) => {
  return (
    <div>
      <h1 id="welcomePage">Welcome to the best news site on earth</h1>
      <h4>
        visit our <br />
        <Link to={"/articles"} element={AllArticles}>
          HOME
        </Link>{" "}
        <br />
        for all the latest articles
      </h4>
    </div>
  );
};

export default WelcomePage;
