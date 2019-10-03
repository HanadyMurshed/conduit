import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { colors, fontSize } from "../SystemVariables";
import { Button } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  defualt: {
    textTransform: "none",

    width: "auto",
    minWidth: "40px",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: fontSize.small,
    color: colors.PrimaryColor,
    border: "1px solid" + colors.lightGray
  },
  active: {
    textTransform: "none",

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

export const Index: React.FC<{
  index: number;
  propStyle?: string;
  onClick?: (index: number) => void;
}> = ({ index, propStyle, onClick = () => {} }) => {
  const classes = useStyle();
  return (
    <Button
      onClick={() => onClick(index - 1)}
      className={propStyle ? propStyle : classes.defualt}
    >
      {index}
    </Button>
  );
};
