import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Typography, IconButton, withStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { navigate } from "@reach/router";
import { style } from "./style";
import { IProps } from "./IProps";
import { IState } from "./IState";

class Article extends React.Component<IProps, IState> {
  handleClickArticle = (slug: string) => {
    navigate(`/Article/${slug}`);
  };
  handleClickUser = (username: string) => {
    navigate(`/${username}`);
  };
  private handleFavoriteClickEvent(
    slug: string,
    favorited: Boolean,
    handler?: (favorited: Boolean, slug: string) => void
  ) {
    return () => {
      if (handler)
        this.setState({ favorited: !favorited }, () =>
          handler(favorited, slug)
        );
    };
  }
  render() {
    const {
      article: {
        slug,
        title,
        description,
        createdAt,
        favorited,
        favoritesCount,
        author: { username, image }
      },
      classes,
      handleFavoritEvent
    } = this.props;
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
                  onClick={() => this.handleClickUser(username)}
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
          <IconButton
            onClick={this.handleFavoriteClickEvent(
              slug,
              favorited,
              handleFavoritEvent
            )}
            className={`${classes.favoriteButton} ${
              favorited ? classes.active : ""
            }`.trim()}
          >
            <FavoriteIcon className={classes.favoriteContent} />
            <span className={classes.favoriteContent}>{favoritesCount}</span>
          </IconButton>
        </Grid>

        <Grid item xs={12}>
          <Typography
            onClick={() => this.handleClickArticle(slug)}
            className={classes.bodyTitle}
          >
            {title}
          </Typography>
          <Typography
            onClick={() => this.handleClickArticle(slug)}
            className={classes.bodyText}
          >
            {description}
          </Typography>
          <Typography
            onClick={() => this.handleClickArticle(slug)}
            className={classes.showExtra}
          >
            Read more...
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(style)(Article);
