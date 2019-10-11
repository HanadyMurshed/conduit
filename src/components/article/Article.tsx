import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Typography, IconButton, withStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { style } from "./style";
import { IProps } from "./IProps";
import { IState } from "./IState";
import { Link } from "react-router-dom";
import { colors } from "../../utils/SystemVariables";
import { formatDate } from "../../utils/Helpers";

class Article extends React.Component<IProps, IState> {
  state: IState = { favorited: false, favoritesCount: 0 };
  componentDidMount() {
    const fav: Boolean = this.props.article.favorited;
    const count: number = this.props.article.favoritesCount;
    this.setState({ favorited: fav, favoritesCount: count });
  }
  reversFavorite() {
    const favorited = this.state.favorited;
    const favoritesCount = favorited
      ? this.state.favoritesCount - 1
      : this.state.favoritesCount + 1;
    this.setState({ favorited: !favorited, favoritesCount: favoritesCount });
  }

  private handleFavoriteClick = (slug: string) => {
    const handler = this.props.handleFavoritEvent;
    const favorited = this.state.favorited;
    const favoritesCount = favorited
      ? this.state.favoritesCount - 1
      : this.state.favoritesCount + 1;

    if (handler)
      this.setState(
        { favorited: !favorited, favoritesCount: favoritesCount },
        () => handler(favorited, slug, this.reversFavorite)
      );
  };

  render() {
    const {
      article: {
        slug,
        title,
        description,
        createdAt,
        author: { username, image }
      },
      classes
    } = this.props;
    const { favorited, favoritesCount } = this.state;
    return (
      <Grid className={classes.root} container spacing={1}>
        <Grid item xs={11}>
          <Grid container spacing={1}>
            <Grid item>
              <Avatar className={classes.headerAvatar} src={image} />
            </Grid>

            <Grid item className={classes.headerCaption}>
              <div className={classes.VerticalCentreAlign}>
                <Link
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold"
                  }}
                  to={`/user/${username}`}
                >
                  <Typography variant="h6" className={classes.headerTitle}>
                    {username}
                  </Typography>
                </Link>
                <Typography variant="h6" className={classes.headerSubTitle}>
                  {formatDate(createdAt)}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={1}>
          <IconButton
            onClick={() => this.handleFavoriteClick(slug)}
            className={`${classes.favoriteButton} ${
              favorited ? classes.active : ""
            }`.trim()}
          >
            <FavoriteIcon className={classes.favoriteContent} />
            <span className={classes.favoriteContent}>{favoritesCount}</span>
          </IconButton>
        </Grid>

        <Grid item xs={12}>
          <Link
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: colors.TextPrimaryColor
            }}
            to={{
              pathname: `/Article/${slug}`,
              state: { article: this.props.article }
            }}
          >
            <Typography className={classes.bodyTitle}>{title}</Typography>
            <Typography className={classes.bodyText}>{description}</Typography>
            <Typography className={classes.showExtra}>Read more...</Typography>
          </Link>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(style)(Article);
