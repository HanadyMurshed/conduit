import * as React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { MyTab } from "../../components/Tab";
import { colors, dims } from "../../SystemVariables";
import { ButtonTag } from "../../components/ButtonTag";
import { RouteComponentProps } from "@reach/router";
import { Header } from "../../components/Header";
import { listArticles } from "../../server";
import { IArticle } from "../../types/conduit.types";
import { Feed } from "../../components/Feed";

const tags = ["art", "science", "action", "anime", "games", "whatever"];

const styles = {
  page: {
    width: dims.pageWidth + 40,
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
class Home extends React.Component<
  { classes: any } & RouteComponentProps,
  { articles: IArticle[]; count: number }
> {
  state = { articles: [], count: 0 };
  componentDidMount() {
    this.getGlobalFeed();
  }
  getGlobalFeed = () => {
    listArticles({}).then((response: any) => {
      const articles: IArticle[] = response.data.articles;
      console.log(articles);
    });
  };
  getYourFeed = (): JSX.Element => {
    return <p>still not calculated</p>;
  };
  render() {
    const { classes } = this.props;
    const { articles } = this.state;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container className={classes.page}>
          <Grid item xs={12} md={9}>
            <MyTab
              globalFeed={
                <div>
                  {articles.map(e => (
                    <Feed />
                  ))}
                </div>
              }
            ></MyTab>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.tagPanel}>
              <Typography className="title">Populer Tags</Typography>
              <div className="body">
                {tags.map(e => (
                  <ButtonTag key={e} title={e} />
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(Home);
