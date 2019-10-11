import * as React from "react";
import {
  colors,
  fontSize,
  dims,
  defaultValues
} from "../utils/SystemVariables";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { CardHeader, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/Helpers";
// import { Typography } from "@material-ui/core";

const useStyle = makeStyles({
  root: { width: "100%", background: colors.darkHeader },
  headerContainor: {
    maxWidth: dims.pageWidth + 20,
    paddingLeft: 20,
    color: "white",
    margin: "auto",
    height: "170px"
  },

  title: {
    fontWeight: "bold",
    fontSize: 40,
    paddingTop: 25
  },
  cardHeader: { color: "white", paddingLeft: 0, paddingTop: 20 },
  cardAvatar: { width: 33, height: 33 },
  cardSubheader: {
    color: "white",
    opacity: 0.4,
    fontSize: fontSize.smaller,
    lineHeight: 1
  },
  cardContainorAvatar: { marginRight: 5 },
  cardTitleHeader: {
    fontSize: fontSize.small,
    lineHeight: 1,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});
export const HeaderArticle: React.FC<{
  title: string;
  image?: string;
  usernameLink?: JSX.Element;
  createdAt?: string;
}> = ({ title, usernameLink, createdAt, image = defaultValues.avatar }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.headerContainor}>
        <Typography className={classes.title}>{title}</Typography>
        <CardHeader
          className={classes.cardHeader}
          classes={{
            subheader: classes.cardSubheader,
            title: classes.cardTitleHeader,
            avatar: classes.cardContainorAvatar
          }}
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.cardAvatar}
              src={image}
            />
          }
          title={usernameLink}
          subheader={formatDate(createdAt + "")}
        />
      </div>
    </div>
  );
};
