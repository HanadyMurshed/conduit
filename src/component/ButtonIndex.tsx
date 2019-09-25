import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { colors, fontSize } from "../urils";
import { Button } from "@material-ui/core";

export const style = makeStyles(() => ({
  defualt: {
    width: "auto",
    minWidth: "40px",
    fontSize: fontSize.small,
    color: colors.PrimaryColor,
    border: "1px solid" + colors.TextSecondayColor
  },
  active: {
    width: "auto",
    minWidth: "40px",
    fontSize: fontSize.small,
    color: "white",
    background: colors.PrimaryColor,
    "&:hover": {
      cursor: "default",
      textDecoration: "underline",
      background: colors.PrimaryColor
    }
  }
}));

interface Props {
  index: number;
  style?: string;
}
export default ({ index }: Props) => {
  const classes = style();

  return <Button className={classes.active}>{index}</Button>;
};
