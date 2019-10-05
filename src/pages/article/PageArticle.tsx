import * as React from "react";
import { Grid, withStyles, Typography } from "@material-ui/core";
import { colors, dims } from "../../SystemVariables";
import { RouteComponentProps } from "@reach/router";
import { HeaderArticle } from "../../components/HeaderArticle";
import { getAnArticle } from "../../server";
import { IArticle } from "../../types/conduit.types";

const styles = {
  page: {
    width: dims.pageWidth,
    margin: "auto",
    paddingLeft: 20,
    paddingRight: 20,
    minWidth: 500,
    marginTop: 30
  },
  tagPanel: {
    background: colors.lightGray,
    padding: "8px 5px 8px 5px",

    "& .title": {
      color: colors.TextPrimaryColor,
      fontSize: 14,
      padding: 0
    }
  }
};

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
