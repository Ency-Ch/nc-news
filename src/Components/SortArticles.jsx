import React from "react";
import { Link } from "react-router-dom";
import { pickSelectedValueFromRadioButton } from "../utils/api";

const SortArticles = (props) => {
  const { setQuery } = props;

  return (
    <div>
      <h2>Sort all articles by </h2>
      <form>
        <div className="form-check">
          <label className="radio form-check-label">
            <input
              className="form-check-input"
              type="radio"
              name="answer"
              value="votes"
            ></input>
            votes
          </label>
        </div>
        <div className="form-check">
          <label className="radio form-check-label">
            <input
              className="form-check-input"
              type="radio"
              name="answer"
              value="created_at"
            ></input>
            created_at
          </label>
        </div>

        {/* <label class="radio">
          <input type="radio" name="answer" value=""></input>
          default
        </label> */}
        <button
          type="button"
          className="btn btn-primary btn-sm text-center "
          onClick={(e) => {
            e.preventDefault();
            let thequery = pickSelectedValueFromRadioButton();
            setQuery(thequery);
          }}
        >
          click to sort
        </button>
      </form>
    </div>
  );
};

export default SortArticles;
