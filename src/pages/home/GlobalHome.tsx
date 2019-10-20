import * as React from "react";
import { Grid, withStyles, Typography } from "@material-ui/core";
import { MyTab } from "../../components/Tab";
import { Header } from "../../components/Header";
import { listArticles } from "../../api/server";
import { styles } from "./styles";
import TagsPanel from "../../container/TagPanel/TagPanel";
import ListArticles from "../../container/ArticleList/Articles";
import Pagination from "../../container/Pagination";
import { connect } from "react-redux";
import { AppState } from "../../reducers/rootReducer";
import { updatePageParamsCurrentTaP } from "../../components/pageParams/duck/actions";
import { listGlobalFeedAticles } from "../../container/ArticleList/duck/action";

class Home extends React.Component<{
  classes: any;
  loading: boolean;
  currentTag?: string;
  updatePageParamsCurrentTaP: any;
  listGlobalFeedAticles: any;
}> {
  componentDidMount() {
    this.getGlobalFeed({ limit: 10 });
  }
  state: { tabs: string[] } = { tabs: ["Global Feed"] };

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
        this.props.currentTag !== ""
          ? { limit: 10, offset: index * 10, tag: this.props.currentTag }
          : { limit: 10, offset: index * 10 }
      )
    );
  };

  handleTabChangeEvent = (event: React.ChangeEvent<{}>, value: any) => {
    if (value === 0) {
      this.props.updatePageParamsCurrentTaP({ currentTap: value });
      this.props.listGlobalFeedAticles();
    }
  };

  render() {
    const { classes, loading, currentTag } = this.props;
    const { tabs } = this.state;

    return (
      <Grid container style={{ paddingBottom: 100 }}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid container className={classes.page}>
          <Grid item xs={12} md={9}>
            <MyTab
              onChange={this.handleTabChangeEvent}
              tabs={currentTag ? [...tabs, `#${currentTag}`] : tabs}
              value={currentTag ? 1 : 0}
            >
              <div>
                <ListArticles />
                {loading && (
                  <Typography className={classes.loadingMsg}>
                    Loading Articles ...
                  </Typography>
                )}
                <Pagination />
              </div>
            </MyTab>
          </Grid>
          <Grid item xs={12} md={3}>
            <TagsPanel />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapState = (state: AppState) => ({
  loading: state.articlesState.loading,
  currentTag: state.pageState.currentTag,
  currentTap: state.pageState.currentTab
});

export default withStyles(styles)(
  connect(
    mapState,
    { updatePageParamsCurrentTaP, listGlobalFeedAticles }
  )(Home)
);
