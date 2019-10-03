import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import { colors, fontSize, defaultValues } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IArticle } from "../types/conduit.types";

const style = makeStyles(() => ({
  containor: {
    borderBottom: "solid 1px" + colors.lightGray,
    paddingTop: 20
  },
  mediaCaption: {
    color: colors.PrimaryColor,
    fontSize: fontSize.small,
    lineHeight: 1,
    cursor: "pointer",
    "&:hover": {
      color: colors.PrimaryDark,
      textDecoration: "underline"
    }
  },
  VerticalCentreAlign: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  },
  VerticalCentreAlignLike: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  },
  Containor: {
    position: "relative",
    height: "80%",
    marginTop: "10%",
    marginButtom: "10%",
    width: "50px",
    border: "1px solid" + colors.PrimaryColor,
    cursor: "pointer",
    transition: "0.1s",
    borderRadius: 5,
    "&:hover": {
      background: colors.PrimaryColor
    },
    "&:hover $like": {
      color: "white"
    }
  },
  FeedHeaderCaption: {
    position: "relative",
    width: "80%"
  },
  mediaDhareDate: {
    color: colors.TextSecondayColor,
    fontSize: fontSize.smaller,
    opacity: 0.8,
    lineHeight: 1
  },
  like: {
    width: 18,
    height: 14,
    transition: "0.1s",
    fontSize: fontSize.normal,
    margin: "0",
    padding: 0,
    color: colors.PrimaryColor
  },
  avatar: { width: 30, height: 30 },
  bodyTitle: {
    cursor: "pointer",
    fontSize: fontSize.large,
    marginTop: 12
  },
  bodyText: {
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

export const Article: React.FC<{ article: IArticle }> = ({
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
      <Grid className={classes.containor} container spacing={1}>
        <Grid item xs={11}>
          <Grid container spacing={1}>
            <Grid item>
              <Avatar className={classes.avatar} src={image} />
            </Grid>
            <Grid item className={classes.FeedHeaderCaption}>
              <div className={classes.VerticalCentreAlign}>
                <Typography variant="h6" className={classes.mediaCaption}>
                  {username}
                </Typography>
                <Typography variant="h6" className={classes.mediaDhareDate}>
                  {createdAt}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Grid
            item
            container
            justify="center"
            spacing={2}
            className={classes.Containor}
          >
            <div className={classes.VerticalCentreAlignLike}>
              <FavoriteIcon className={classes.like} />
              <span className={classes.like}>{favoritesCount}</span>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.bodyTitle}>{title}</Typography>
          <Typography className={classes.bodyText}>{body}</Typography>
          <Typography className={classes.showExtra}>Read more...</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
