import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const mapState = (state: any) => {
  return { user: state.user };
};

const useStyle = makeStyles({
  link: {
    textDecoration: "none"
  }
});

const SignInMsg = (props: any) => {
  const classes = useStyle();
  if (props.user) return null;
  return (
    <div>
      <Typography style={{ paddingLeft: 200 }}>
        <Link className={classes.link} to="/sign-in">
          Sign in
        </Link>{" "}
        or{" "}
        <Link className={classes.link} to="/sign-up">
          sign un
        </Link>{" "}
        to add comments on this article.
      </Typography>
    </div>
  );
};

export default connect(mapState)(SignInMsg);
