import * as React from "react";
import Button from "@material-ui/core/Button";
import { colors, fontSize } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => ({
  tag: {
    background: colors.TagBackgroundColor,
    color: "white",
    fontSize: fontSize.smaller,
    textTransform: "lowercase",
    width: "auto",
    height: "20px",
    lineHeight: "10px",
    border: 0,
    borderRadius: 15,
    minWidth: "20px",
    "&:hover": {
      background: colors.TagDarkerColor
    },
    margin: "5px 3px 0px 0px"
  },
  active: {
    background: colors.TagDarkerColor,
    textDecoration: "underline"
  }
}));

export const ButtonTag: React.FC<{
  title: string;
  active?: boolean;
  onClick?: (tag: string) => void;
}> = ({ title, active = false, onClick = () => {} }) => {
  const classes = useStyle();
  return (
    <Button
      onClick={() => {
        onClick(title);
      }}
      className={classes.tag + active ? classes.active : ""}
    >
      {title}
    </Button>
  );
};
