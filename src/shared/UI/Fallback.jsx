import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import classes from "./Fallback.module.css";
const Fallback = (props) => {
  return (
    <div className={classes.center}>
      <h2 className={classes.title}>{props.content}</h2>
      <Link to="/">
        <Button type="button">{props.action}</Button>
      </Link>
    </div>
  );
};

export default Fallback;
