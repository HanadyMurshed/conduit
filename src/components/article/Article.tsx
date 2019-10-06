import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import { defaultValues } from "../../SystemVariables";
import Grid from "@material-ui/core/Grid";
import { Typography, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IArticle } from "../../types/conduit.types";
import { navigate } from "@reach/router";
import { makeStyles } from "@material-ui/styles";
import { style } from "./style";

const useStyle = makeStyles(style);

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
  const handleClickUser = (username: string) => {
    navigate(`/${username}`);
  };

  const classes = useStyle();
  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid item xs={11}>
        <Grid container spacing={1}>
          <Grid item>
            <Avatar className={classes.headerAvatar} src={image} />
          </Grid>

          <Grid item className={classes.headerCaption}>
            <div className={classes.VerticalCentreAlign}>
              <Typography
                onClick={() => handleClickUser(username)}
                variant="h6"
                className={classes.headerTitle}
              >
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
