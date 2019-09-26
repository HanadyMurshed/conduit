import * as React from "react";
import Button from "@material-ui/core/Button";
import { colors, fontSize } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
interface Props {
  title: string;
}
const style = makeStyles(() => ({
  tag: {
    background: colors.TagBackgroundColor,
    color: "white",
    fontSize: fontSize.smaller,
    textTransform: "lowercase",
    width: "auto",
    height: "26px",
    lineHeight: "16px",
    border: 0,
    verticalAlign: "middle",
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: "20px"
  }
}));

export default ({ title }: Props) => {
  const classes = style();
  return <Button className={classes.tag}>{title}</Button>;
};
