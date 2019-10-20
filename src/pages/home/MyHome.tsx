import * as React from "react";
import {
  Grid,
  withStyles,
  CircularProgress,
  Typography
} from "@material-ui/core";
import { MyTab } from "../../components/Tab";
import {
  listArticles,
  getTags,
  getArticleFeed,
  unFavoriteArticle,
  FavoriteArticle
} from "../../api/server";
import { IArticle } from "../../types/conduit.types";
import Article from "../../components/article/Article";
import { PageIndex } from "../../components/PageIndex";
import { styles } from "./styles";
import { IStateLogged } from "./IState";
import TagsPanel from "../../container/TagPanel/TagPanel";

class Home extends React.Component<{ classes: any }, IStateLogged> {
  state: IStateLogged = {
    articles: [],
    count: 0,
    tags: [],
    currentPage: 0,
    pageCount: 0,
    tabs: ["Your Feed", "Global feed"],
    currentTag: "",
    currentTab: 1,
    loading: true,
    loadingArticle: false
  };

  componentDidMount() {
    this.getGlobalFeed({ limit: 10 });
    this.getTags();
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
        this.setState({ loading: false, loadingArticle: false });
      });
  };

  getYourFeed = (queryparams: any) => {
    getArticleFeed(queryparams)
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
        this.setState({ loading: false, loadingArticle: false });
      });
  };

  getTags = () => {
    getTags().then((response: any) => {
      this.setState({ tags: response.data.tags, currentPage: 0 });
    });
  };

  handleIndexClickEvent = (index: number) => {
    const { currentTab } = this.state;
    let fun: () => void = () => {};
    if (currentTab === 1)
      fun = () => this.getGlobalFeed({ limit: 10, offset: index * 10 });
    else if (currentTab === 0)
      fun = () => this.getYourFeed({ limit: 10, offset: index * 10 });
    else if (currentTab === 2) {
      fun = () =>
        this.getGlobalFeed({
          limit: 10,
          offset: index * 10,
          tag: this.state.currentTag
        });
    }
    this.setState(
      {
        currentPage: index,
        loadingArticle: true
      },
      fun
    );
  };

  handleTagClickEvent = (tag: string) => {
    this.setState(
      {
        currentTag: tag,
        currentTab: 2,
        currentPage: 0,
        loading: true,
        pageCount: 0
      },
      () => this.getGlobalFeed({ limit: 10, tag: tag })
    );
  };

  handleTabChangeEvent = (event: React.ChangeEvent<{}>, value: any) => {
    if (value === 1)
      this.setState(
        {
          currentTag: "",
          loading: true,
          pageCount: 0
        },
        () => this.getGlobalFeed({ limit: 10 })
      );
    else if (value === 0)
      this.setState(
        {
          currentTag: "",
          loading: true,
          pageCount: 0
        },
        () => this.getYourFeed({ limit: 10 })
      );

    this.setState({
      currentTab: value,
      currentPage: 0
    });
  };
  handleFavoritEvent = (favorited: Boolean, slug: string) => {
    let favoriteToggle = favorited
      ? unFavoriteArticle(slug)
      : FavoriteArticle(slug);
    favoriteToggle.then((res: any) => {}).catch();
  };

  render() {
    const { classes } = this.props;
    const {
      articles,
      currentPage,
      pageCount,
      tabs,
      currentTag,
      currentTab,
      loading,
      loadingArticle
    } = this.state;

    return (
      <Grid container style={{ paddingBottom: 100 }}>
        <Grid container className={classes.page}>
          <Grid item xs={12} md={9}>
            <MyTab
              onChange={this.handleTabChangeEvent}
              tabs={currentTag !== "" ? [...tabs, `#${currentTag}`] : tabs}
              value={currentTab}
            >
              {loading ? (
                <div style={{ textAlign: "center" }}>
                  <CircularProgress className={classes.progess} />
                </div>
              ) : articles.length !== 0 ? (
                <div>
                  {articles.map((e: IArticle) => (
                    <Article
                      handleFavoritEvent={this.handleFavoritEvent}
                      key={e.slug}
                      article={e}
                    />
                  ))}
                </div>
              ) : (
                <Typography style={{ color: "black", opacity: 0.6 }}>
                  No article found... yet
                </Typography>
              )}
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
            {pageCount && pageCount > 1 ? (
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
