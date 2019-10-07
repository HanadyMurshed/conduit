import * as React from "react";
import { colors } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => ({
  listItem: {
    color: colors.darkRed,
    textAlign: "left"
  }
}));

export const TagList: React.FC<{
  tags: string[];
}> = ({ tags = [] }) => {
  const classes = useStyle();
  return <ul>{tags.map(tag => ({ tag }))}</ul>;
};
