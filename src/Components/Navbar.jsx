import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";
import { useEffect } from "react";
import React from "react";

import AllArticles from "./AllArticles";
import WelcomePage from "./WelcomePage";

const Navbar = (props) => {
  const { Topics, SetTopics } = props;

  useEffect(() => {
    getTopics().then((response) => {
      SetTopics(response);
    });
  }, [SetTopics]);

  return (
    <div className="container">
      <div className="row align-items-end">
        <div className="col">
          <h2>
            <Link to={"/"} element={WelcomePage}>
              Welcome Page
            </Link>
          </h2>
        </div>
        <div className="col">
          <h2>
            <Link to={"/articles"} element={AllArticles}>
              HOME
            </Link>
          </h2>
        </div>
        <div className="col">
          {Topics.map(({ slug }) => {
            return (
              <span key={slug}>
                <li className="float-end" className="slugspace" key={slug}>
                  <Link to={`/topics/${slug}`}>{slug}</Link>
                </li>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
