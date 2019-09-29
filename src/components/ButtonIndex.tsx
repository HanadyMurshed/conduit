import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { colors, fontSize } from "../SystemVariables";
import { Button } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  defualt: {
    width: "auto",
    minWidth: "40px",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: fontSize.small,
    color: colors.PrimaryColor,
    border: "1px solid" + colors.TextSecondayColor
  },
  active: {
    width: "auto",
    minWidth: "40px",
    paddingLeft: 10,
    paddingRight: 10,
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

export const Index: React.FC<{ index: number; propStyle?: string }> = ({
  index,
  propStyle
}) => {
  const classes = useStyle();
  return (
    <Button className={propStyle ? propStyle : classes.defualt}>{index}</Button>
  );
};
