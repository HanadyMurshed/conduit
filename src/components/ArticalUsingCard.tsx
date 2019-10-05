import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import { colors, fontSize, defaultValues } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  IconButton
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IArticle } from "../types/conduit.types";

const style = makeStyles(() => ({
  card: {
    color: "white",
    margin: "auto",
    height: "170px"
  },
  cardHeader: {
    width: "auto",
    background: "red",
    color: "white"
  },
  cardAvatar: { width: 33, height: 33 },
  cardSubheader: {
    width: "auto",

    color: colors.TextSecondayColor,
    fontSize: fontSize.smaller,
    opacity: 0.8,
    lineHeight: 1
  },
  cardContainorAvatar: { marginRight: 5 },
  cardTitleHeader: {
    color: colors.PrimaryColor,
    fontSize: fontSize.small,
    lineHeight: 1,
    width: "auto",
    background: "red",
    cursor: "pointer",
    "&:hover": {
      color: colors.PrimaryDark,
      textDecoration: "underline"
    }
  },
  cardHeaderFavorite: {
    width: 18,
    height: 14,
    transition: "0.1s",
    fontSize: fontSize.normal,
    display: "table-cell",
    verticalAlign: "middle",
    color: colors.PrimaryColor
  },
  cardHeaderFavoriteContainor: {
    border: "1px solid" + colors.PrimaryColor,
    transition: "0.1s",
    borderRadius: 5,
    height: 30,
    width: "40px",
    paddingBottom: 10,
    marginTop: 10,
    "&:hover": {
      background: colors.PrimaryColor
    },
    "&:hover $cardHeaderFavorite": {
      color: "white"
    }
  },
  bodyTitle: {
    cursor: "pointer",
    fontSize: fontSize.large,
    marginTop: 9
  },
  bodyContent: {
    cursor: "pointer",
    fontSize: fontSize.small,
    color: colors.TextSecondayColor,
    marginBottom: 20,
    lineHeight: 1
  },
  showExtra: {
    cursor: "pointer",
    fontSize: fontSize.smaller,
    color: colors.TextSecondayColor,
    opacity: 0.8
  }
}));

export const Artic: React.FC<{ article: IArticle }> = ({
  article: {
    slug,
    title,
    description,
    body,
    tagList,
    createdAt,
    updatedAt,
    favorited,
    favoritesCount,
    author: { email, username, bio, image = defaultValues.avatar }
  }
}) => {
  const classes = style();
  return (
    <div>
      <Card>
        <CardHeader
          className={classes.cardHeader}
          classes={{
            subheader: classes.cardSubheader,
            title: classes.cardTitleHeader,
            avatar: classes.cardContainorAvatar
          }}
          titleTypographyProps={{ style: { width: "auto" } }}
          avatar={
            <Avatar aria-label="recipe" className={classes.cardAvatar}>
              R
            </Avatar>
          }
          action={
            <IconButton
              className={classes.cardHeaderFavoriteContainor}
              aria-label="add to favorites"
            >
              <FavoriteIcon className={classes.cardHeaderFavorite} />
              <span className={classes.cardHeaderFavorite}>0</span>
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />

        <CardContent>
          <Typography component="p" className={classes.bodyTitle}>
            {title}
          </Typography>
          <Typography component="p" className={classes.bodyContent}>
            {description}
          </Typography>
          <Typography component="p" className={classes.showExtra}>
            Read more...
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
