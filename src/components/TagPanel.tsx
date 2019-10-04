import * as React from "react";
import { ButtonTag } from "./ButtonTag";
import { makeStyles } from "@material-ui/styles";
import { colors } from "../SystemVariables";
import { Typography } from "@material-ui/core";

const useStyle = makeStyles({
  tagPanel: {
    background: colors.lightGray,
    padding: "8px 5px 8px 5px",

    "& .title": {
      color: colors.TextPrimaryColor,
      fontSize: 14,
      padding: 0
    }
  }
});
export const TagsPanel: React.FC<{
  style?: any;
  tags: string[];
  active?: string;
  onClick?: (title: string) => void;
}> = ({ tags = [], active = "", style, onClick = () => {} }) => {
  const classes = useStyle();
  return (
    <div className={classes.tagPanel} style={style}>
      <Typography className="title">Populer Tags</Typography>
      <div className="body">
        {tags.map(e => (
          <ButtonTag
            title={e}
            active={active === e ? true : false}
            onClick={onClick}
            key={e}
          />
        ))}{" "}
      </div>
    </div>
  );
};
