import * as React from "react";
import Button from "@material-ui/core/Button";
import { colors, fontSize } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
interface Props {
  title: string;
}

const style = makeStyles(() => ({
  button: {
    background: "inherit",
    fontSize: fontSize.normal,
    color: colors.TextPrimaryColor,
    transition: "0.1s",
    opacity: 0.3,
    textTransform: "lowercase",
    "&:hover": {
      background: "inherit",
      opacity: 1

      //   textTransform: "uppercase"
    }
    // "&::first-letter": {
    //   textTransform: "uppercase"
    // }
  }
}));

export default ({ title }: Props) => {
  const classes = style();
  return <Button className={classes.button}>{title}</Button>;
};
