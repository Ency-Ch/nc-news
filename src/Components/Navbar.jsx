import { Link, useLinkClickHandler } from "react-router-dom";
import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import AllArticles from "./AllArticles";

const Navbar = (props) => {
  const { Topics, SetTopics, setQuery, query } = props;

  useEffect(() => {
    getTopics().then((response) => {
      SetTopics(response);
    });
  }, []);

  return (
    <div>
      <h2 className="nav navbar-nav navbar-default">
        <Link to={"/articles"} element={AllArticles}>
          HOME
        </Link>
      </h2>
      {Topics.map(({ slug }) => {
        return (
          <div className="navbar navbar-expand-lg navbar-light bg-light nav navbar-nav navbar-default">
            <li key={slug} className="nav navbar-nav navbar-default">
              <Link
                className="nav navbar-nav navbar-default"
                to={`/topics/${slug}`}
              >
                {slug}
              </Link>
            </li>
          </div>
        );
      })}
      <div class="control"></div>
    </div>
  );
};

export default Navbar;
