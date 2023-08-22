import React, { useEffect } from "react";
import classes from "../../styles/not-found.module.scss";

const NotFound = () => {
  useEffect(() => {
    window.location.replace("/not-found");
  }, []);
  return (
    <div className={classes.notFoundCnt}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
