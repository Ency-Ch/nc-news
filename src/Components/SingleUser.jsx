import { useEffect, useState } from "react";
import { getSingleUser } from "../utils/api";

import React from "react";

const SingleUser = () => {
  const [DefaultUser, setDefaultUser] = useState([]);

  useEffect(() => {
    getSingleUser().then((returnedUser) => {
      setDefaultUser(returnedUser);
    });
  }, []);

  return (
    <div>
      <p>Logged On {DefaultUser}</p>
    </div>
  );
};

export default SingleUser;
