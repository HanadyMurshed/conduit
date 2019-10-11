import * as React from "react";
import { colors, fontSize } from "../utils/SystemVariables";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyle = makeStyles(() => ({
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
  icon?: JSX.Element;
}> = ({ title, icon, ...rest }) => {
  const classes = useStyle();
  return (
    <Button {...rest} className={classes.button}>
      {icon}
      {title}
    </Button>
  );
};
