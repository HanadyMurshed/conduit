import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { MyTab } from "../../components/Tab";
import { colors, dims } from "../../SystemVariables";
import { RouteComponentProps } from "@reach/router";
import { Header } from "../../components/Header";
import { listArticles, getTags } from "../../server";
import { IArticle } from "../../types/conduit.types";
import { Article } from "../../components/Article";
import { PageIndex } from "../../components/PageIndex";
import { TagsPanel } from "../../components/TagPanel";

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
  currentPage: number;
  pageCount: number;
  tabs: string[];
  currentTag: string;
}
class Home extends React.Component<
  { classes: any } & RouteComponentProps,
  IState
> {
  state: IState = {
    articles: [],
    count: 0,
    tags: [],
    currentPage: 0,
    pageCount: 0,
    tabs: ["Global feed"],
    currentTag: ""
  };

  componentDidMount() {
    this.getGlobalFeed({ limit: 10 });
    this.getTags();
  }

  getGlobalFeed = (queryparams: any) => {
    listArticles(queryparams).then((response: any) => {
      const count = Math.ceil(response.data.articlesCount / 10);
      this.setState({ articles: response.data.articles, pageCount: count });
    });
  };

  getTags = () => {
    getTags().then((response: any) => {
      console.log(response.data);
      this.setState({ tags: response.data.tags });
    });
  };

  handleIndexClickEvent = (index: number) => {
    this.setState(
      {
        currentPage: index
      },
      () =>
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
        currentTag: tag
      },
      () => this.getGlobalFeed({ limit: 10, tag: tag })
    );
  };

  handleTabChangeEvent = (event: React.ChangeEvent<{}>, value: any) => {
    if (value === 0)
      this.setState(
        {
          currentTag: ""
        },
        () => this.getGlobalFeed({ limit: 10 })
      );
  };

  render() {
    const { classes } = this.props;
    const {
      articles,
      tags,
      currentPage,
      pageCount,
      tabs,
      currentTag
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
              <div>
                {articles.map((e: IArticle) => (
                  <Article key={e.slug} article={e} />
                ))}
              </div>
            </MyTab>
            {pageCount ? (
              <PageIndex
                onClick={this.handleIndexClickEvent}
                style={{ marginTop: 20 }}
                active={currentPage}
                PageCount={pageCount}
              />
            ) : null}
          </Grid>

          <Grid item xs={12} md={3}>
            <TagsPanel
              onClick={this.handleTagClickEvent}
              tags={tags}
              active={currentTag}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
