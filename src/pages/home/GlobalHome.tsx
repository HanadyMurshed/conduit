import * as React from "react";
import { Grid, withStyles, Typography } from "@material-ui/core";
import { MyTab } from "../../components/Tab";
import { Header } from "../../components/Header";
import { listArticles } from "../../api/server";
import { PageIndex } from "../../components/PageIndex";
import { IState } from "./IState";
import { styles } from "./styles";
import TagsPanel from "../../container/TagPanel/TagPanel";
import ListArticles from "../../container/ArticleList/Articles";

class Home extends React.Component<{ classes: any }, IState> {
  state: IState = {
    articles: [],
    count: 0,
    tags: [],
    currentPage: 0,
    pageCount: 0,
    tabs: ["Global feed"],
    currentTag: "",
    loading: true,
    loadingArticle: false
  };

  componentDidMount() {
    this.getGlobalFeed({ limit: 10 });
  }

  getGlobalFeed = (queryparams: any) => {
    listArticles(queryparams)
      .then((response: any) => {
        const count = Math.ceil(response.data.articlesCount / 10);
        this.setState({
          articles: response.data.articles,
          pageCount: count,
          loading: false,
          loadingArticle: false
        });
      })
      .catch((err: any) => {
        this.setState({ loading: false });
      });
  };

  handleIndexClickEvent = (index: number) => {
    this.setState({ loadingArticle: true, currentPage: index }, () =>
      this.getGlobalFeed(
        this.state.currentTag !== ""
          ? { limit: 10, offset: index * 10, tag: this.state.currentTag }
          : { limit: 10, offset: index * 10 }
      )
    );
  };

  handleTagClickEvent = (tag: string) => {
    this.setState(
      {
        loading: true,
        currentTag: tag
      },
      () => this.getGlobalFeed({ limit: 10, tag: tag })
    );
  };

  handleTabChangeEvent = (event: React.ChangeEvent<{}>, value: any) => {
    if (value === 0)
      this.setState(
        {
          currentTag: "",
          loading: true,
          currentPage: 0
        },
        () => this.getGlobalFeed({ limit: 10 })
      );
  };

  render() {
    const { classes } = this.props;
    const {
      currentPage,
      pageCount,
      tabs,
      currentTag,
      loading,
      loadingArticle
    } = this.state;

    return (
      <Grid container style={{ paddingBottom: 100 }}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid container className={classes.page}>
          <Grid item xs={12} md={9}>
            <MyTab
              onChange={this.handleTabChangeEvent}
              tabs={currentTag !== "" ? [...tabs, `#${currentTag}`] : tabs}
              value={currentTag !== "" ? 1 : 0}
            >
              <ListArticles />
            </MyTab>

            {loadingArticle && (
              <Typography
                style={{
                  color: "black",
                  opacity: 0.8,
                  fontSize: 14,
                  marginTop: 40
                }}
              >
                Loading Articles ...
              </Typography>
            )}
            {pageCount && pageCount > 1 && !loading ? (
              <PageIndex
                onClick={this.handleIndexClickEvent}
                style={{ marginTop: 20 }}
                active={currentPage}
                PageCount={pageCount}
              />
            ) : null}
          </Grid>

          <Grid item xs={12} md={3}>
            <TagsPanel />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
