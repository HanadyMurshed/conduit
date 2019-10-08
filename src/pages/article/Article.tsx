import * as React from "react";
import { Grid, withStyles, Typography } from "@material-ui/core";
import { Link } from "@reach/router";
import { RouteComponentProps } from "@reach/router";
import { HeaderArticle } from "../../components/HeaderArticle";
import { getAnArticle } from "../../api/server";
import { IArticle } from "../../types/conduit.types";
import { styles } from "./styles";

class Article extends React.Component<
  { classes: any } & RouteComponentProps<{ slug: string }>,
  IArticle
> {
  state: IArticle = {
    slug: "",
    title: "",
    description: "",
    body: "",
    tagList: [],
    createdAt: "",
    updatedAt: "",
    favorited: false,
    favoritesCount: 0,
    author: { username: "", email: "", bio: "", image: "" }
  };

  componentDidMount() {
    const { slug } = this.props;
    if (!slug) return;
    getAnArticle(slug);
    getAnArticle(slug).then((response: any) => {
      this.setState(response.data.article);
    });
  }
  render() {
    const { classes } = this.props;
    const { title, body, author, createdAt } = this.state;
    const { username, image } = author;

    const logged: boolean = Boolean(sessionStorage.getItem("token"));
    return (
      <Grid container style={{ paddingBottom: 100 }}>
        <Grid item xs={12}>
          <HeaderArticle
            createdAt={createdAt}
            title={title}
            image={image}
            username={username}
          />
          <Grid className={classes.page} item xs={12}>
            <Typography>{body}</Typography>
            {!logged ? (
              <Typography className={classes.footer}>
                <Link className={classes.link} to="/sign-in">
                  Sign in
                </Link>{" "}
                or{" "}
                <Link className={classes.link} to="/sign-up">
                  sign un
                </Link>{" "}
                to add comments on this article.
              </Typography>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Article);
