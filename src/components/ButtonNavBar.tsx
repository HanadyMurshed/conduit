import * as React from "react";
import { Link } from "@reach/router";
import { colors, fontSize } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  link: {
    textDecoration: "none"
  },
  button: {
    background: "inherit",
    fontSize: fontSize.normal,
    color: colors.TextPrimaryColor,
    transition: "0.1s",
    opacity: 0.3,
    textTransform: "none",
    "&:hover": {
      background: "inherit",
      opacity: 1

      //   textTransform: "uppercase"
    },
    "&::first-letter": {
      textTransform: "uppercase"
    }
  }
}));

export const ButtonNavBar: React.FC<{
  title: string;
  to: string;
}> = ({ title, to }) => {
  const classes = useStyle();
  return (
    <Link className={classes.link} to={to}>
      <Button className={classes.button}>{title}</Button>
    </Link>
  );
};
