import * as React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { MyTab } from "../../components/Tab";
import { colors, dims } from "../../SystemVariables";
import { ButtonTag } from "../../components/ButtonTag";
import { RouteComponentProps } from "@reach/router";
import { Header } from "../../components/Header";
import { listArticles, getTags } from "../../server";
import { IArticle } from "../../types/conduit.types";
import { Article } from "../../components/Article";

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

interface IState {
  articles: IArticle[];
  count: number;
  tags: string[];
}
class Home extends React.Component<
  { classes: any } & RouteComponentProps,
  IState
> {
  state: IState = { articles: [], count: 0, tags: [] };

  componentDidMount() {
    this.getGlobalFeed();
    this.getTags();
  }

  getGlobalFeed = () => {
    listArticles({}).then((response: any) => {
      this.setState({ articles: response.data.articles });
    });
  };

  getTags = () => {
    getTags().then((response: any) => {
      console.log(response.data);
      this.setState({ tags: response.data.tags });
    });
  };

  getYourFeed = (): JSX.Element => {
    return <p>still not calculated</p>;
  };

  render() {
    const { classes } = this.props;
    const { articles, tags } = this.state;
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
                  {articles.map((e: IArticle) => (
                    <Article key={e.slug} article={e} />
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