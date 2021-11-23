import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";

const Navbar = () => {
  const [Topics, SetTopics] = useState([]);

  useEffect(() => {
    getTopics().then((response) => {
      SetTopics(response);
    });
  }, []);

  return (
    <span>
      <h2>Topics</h2>
      <nav className="navabar">
        {Topics.map(({ slug }) => {
          return (
            <div className="span">
              <div className="ul">
                {" "}
                <li key={slug}>
                  <Link to={slug}>{slug}</Link>
                </li>
              </div>
            </div>
          );
        })}
      </nav>
    </span>
  );
};

export default Navbar;
// [
//   {
//     slug: "coding",
//     description: "Code is love, code is life",
//   },
//   {
//     slug: "football",
//     description: "FOOTIE!",
//   },
//   {
//     slug: "cooking",
//     description: "Hey good looking, what you got cooking?",
//   },
// ];
