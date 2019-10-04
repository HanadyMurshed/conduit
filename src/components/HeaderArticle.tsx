import * as React from "react";
import { colors, fontSize, dims } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { CardHeader, Avatar } from "@material-ui/core";
// import { Typography } from "@material-ui/core";

const useStyle = makeStyles({
  root: { width: "100%", background: colors.darkHeader },
  headerContainor: {
    maxWidth: dims.pageWidth,
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
  username?: string;
  createdAt?: string;
}> = ({ title, createdAt }) => {
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
            <Avatar aria-label="recipe" className={classes.cardAvatar}>
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
      </div>
    </div>
  );
};
