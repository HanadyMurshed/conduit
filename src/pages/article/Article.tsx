import * as React from "react";
import { Grid, withStyles, Typography } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import { HeaderArticle } from "../../components/HeaderArticle";
import { getAnArticle } from "../../server";
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

    return (
      <Grid container style={{ paddingBottom: 100 }}>
        <Grid item xs={12}>
          <HeaderArticle
            createdAt={createdAt}
            title={title}
            image={image}
            username={username}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.page}>{body}</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Article);
