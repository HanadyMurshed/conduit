import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import { colors, fontSize, defaultValues } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IArticle } from "../types/conduit.types";
import { navigate } from "@reach/router";

const style = makeStyles(() => ({
  root: {
    borderBottom: "solid 1px" + colors.lightGray,
    paddingTop: 20,
    paddingBottom: 20
  },
  headerAvatar: { width: 30, height: 30 },
  headerTitle: {
    color: colors.PrimaryColor,
    fontSize: fontSize.small,
    lineHeight: 1,
    cursor: "pointer",
    "&:hover": {
      color: colors.PrimaryDark,
      textDecoration: "underline"
    }
  },
  headerSubTitle: {
    color: colors.TextSecondayColor,
    fontSize: fontSize.smaller,
    opacity: 0.8,
    lineHeight: 1
  },
  VerticalCentreAlign: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  },
  headerCaption: {
    position: "relative",
    width: "80%"
  },
  favoriteButton: {
    borderRadius: 5,
    height: "30px",
    width: "40px",
    border: "1px solid" + colors.PrimaryColor,
    cursor: "pointer",
    transition: "0.1s",
    "&:hover": {
      background: colors.PrimaryColor
    },
    "&:hover $like": {
      color: "white"
    },
    display: "inline-flex",
    verticalAlign: "middle"
  },
  favoriteContent: {
    position: "relative",
    top: "50%",
    transform: "translateY(-20%)",
    width: 18,
    height: 14,
    transition: "0.1s",
    fontSize: fontSize.normal,
    marginBottom: 10,
    paddingBottom: 10,
    color: colors.PrimaryColor
  },
  bodyTitle: {
    cursor: "pointer",
    fontSize: fontSize.large,
    marginTop: 9
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
  const handleClickArticle = (slug: string) => {
    navigate(`/Article/${slug}`);
  };

  const classes = style();
  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid item xs={11}>
        <Grid container spacing={1}>
          <Grid item>
            <Avatar className={classes.headerAvatar} src={image} />
          </Grid>

          <Grid item className={classes.headerCaption}>
            <div className={classes.VerticalCentreAlign}>
              <Typography variant="h6" className={classes.headerTitle}>
                {username}
              </Typography>
              <Typography variant="h6" className={classes.headerSubTitle}>
                {createdAt}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={1}>
        <IconButton className={classes.favoriteButton}>
          <FavoriteIcon className={classes.favoriteContent} />
          <span className={classes.favoriteContent}>{favoritesCount}</span>
        </IconButton>
      </Grid>

      <Grid item xs={12}>
        <Typography
          onClick={() => handleClickArticle(slug)}
          className={classes.bodyTitle}
        >
          {title}
        </Typography>
        <Typography
          onClick={() => handleClickArticle(slug)}
          className={classes.bodyText}
        >
          {description}
        </Typography>
        <Typography
          onClick={() => handleClickArticle(slug)}
          className={classes.showExtra}
        >
          Read more...
        </Typography>
      </Grid>
    </Grid>
  );
};
