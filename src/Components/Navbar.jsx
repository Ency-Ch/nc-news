import { Link, useLinkClickHandler } from "react-router-dom";
import {
  getTopics,
  getSortedArticles,
  pickSelectedValueFromRadioButton,
} from "../utils/api";
import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import AllArticles from "./AllArticles";
import SortedArticles from "./SortedArticles";

const Navbar = (props) => {
  const { Topics, SetTopics, setQuery, query } = props;

  useEffect(() => {
    getTopics().then((response) => {
      SetTopics(response);
    });
  }, []);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h2 className="nav navbar-nav navbar-right">
        <Link to={"/articles"} element={AllArticles}>
          HOME
        </Link>
      </h2>
      {Topics.map(({ slug }) => {
        return (
          <div className="navbar navbar-expand-lg navbar-light bg-light">
            <li key={slug} className="nav navbar-nav navbar-right">
              <Link
                className="nav navbar-nav navbar-right"
                to={`/topics/${slug}`}
              >
                {slug}
              </Link>
            </li>
          </div>
        );
      })}
      <div class="control">
        {" "}
        <form>
          <label class="radio">
            <input type="radio" name="answer" value="votes"></input>
            votes
          </label>
          <label class="radio">
            <input type="radio" name="answer" value="created_at"></input>
            created_at
          </label>
          <label class="radio">
            <input type="radio" name="answer" value=""></input>
            default
          </label>
          {/* <Link to={`/articles?=${query}`}> */}{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              let thequery = pickSelectedValueFromRadioButton();
              setQuery(thequery);
            }}
          >
            click to sort
          </button>
        </form>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
