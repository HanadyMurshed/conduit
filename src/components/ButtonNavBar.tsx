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
    color: colors.TextSecondayColor,
    transition: "0.1s",
    fontWeight: 300,
    textTransform: "none",
    "&:hover": {
      background: "inherit",
      color: colors.TextPrimaryColor

      //   textTransform: "uppercase"
    }
  }
}));

export const ButtonNavBar: React.FC<{
  title: string;
  to?: string;
  icon?: JSX.Element;
}> = ({ title, to = "/", icon }) => {
  const classes = useStyle();
  return (
    <Link className={classes.link} to={to}>
      <Button className={classes.button}>
        {icon}
        {title}
      </Button>
    </Link>
  );
};
