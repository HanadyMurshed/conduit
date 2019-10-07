import * as React from "react";
import { colors, fontSize } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
import { Typography, ButtonBase } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  tag: {
    background: colors.TagBackgroundColor,
    width: "auto",
    margin: 2,
    padding: 3,
    fontSize: fontSize.smaller,
    lineHeight: "10px",
    borderRadius: 15,
    height: "15px",
    border: 0,
    overflow: "hidden",
    display: "inline-block"
  },
  content: {
    textTransform: "lowercase",
    color: "white",
    width: "auto",
    marginRight: 5,
    lineHeight: "10px",
    borderRadius: 15,
    height: "15px",
    minWidth: 10
  }
}));

export const ButtonTagCancel: React.FC<{
  title: string;
  onClick?: (tag: string) => void;
}> = ({ title, onClick = () => {} }) => {
  const classes = useStyle();

  return (
    <div className={classes.tag}>
      <ButtonBase
        onClick={() => {
          onClick(title);
        }}
        className={classes.content}
      >
        x
      </ButtonBase>
      <span className={classes.content}>{title}</span>
    </div>
  );
};
