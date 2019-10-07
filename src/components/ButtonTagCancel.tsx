import * as React from "react";
import { colors, fontSize } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
import { Typography, ButtonBase } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  tag: {
    background: colors.TagBackgroundColor,
    width: "auto",
    padding: 5,
    fontSize: fontSize.smaller,
    lineHeight: "10px",
    borderRadius: 15,

    overflow: "hidden",
    display: "inline-block"
  },
  content: {
    textTransform: "lowercase",
    color: "white",
    width: "auto",
    marginRight: 5,
    height: "20px",
    borderRadius: 15,
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
