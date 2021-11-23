import React, { useState } from "react";

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Topics = (props) => {
  const { Articles } = props;
  return (
    <div>
      <div className="h2">Topic</div>
      <div className="ul">
        <li>title</li>
        <li>title</li>
        <li>title</li>
        <li>title</li>
      </div>
    </div>
  );
};

export default Topics;
