import React from "react";
import { pickSelectedValueFromRadioButton } from "../utils/api";

const SortArticles = (props) => {
  const { setQuery } = props;

  return (
    <div className="hide-sorting-item">
      <div class="container">
        <div class="row">
          <div className="sortAlArticles">
            <h5>Sort all articles by </h5>{" "}
          </div>
          <p id="QueryError"></p>
          <div class="col">
            <form>
              <div className="form-check pr-5 mt-0">
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
              <div className="form-check p-2">
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
              <div className="p-2">
                <button
                  type="button"
                  className="btn btn-primary btn-sm text-center  "
                  onClick={(e) => {
                    e.preventDefault();
                    let thequery = pickSelectedValueFromRadioButton();
                    if (thequery === undefined) {
                      document.getElementById("QueryError").innerHTML =
                        "invalid query please refresh page and try again";
                    } else {
                      document.getElementById("QueryError").innerHTML = "";
                      setQuery(thequery);
                    }
                  }}
                >
                  click to sort
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortArticles;
