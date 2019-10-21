import * as React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { MyTab } from "../../components/Tab";
import { Header } from "../../components/Header";
import TagsPanel from "../../container/TagPanel/TagPanel";
import ListArticles from "../../container/ArticleList/Articles";
import Pagination from "../../container/Pagination";
import { connect } from "react-redux";
import { styles } from "./style";
import { AppState } from "../../reducers/rootReducer";
import {
  updatePageParamsCurrentTaP,
  updatePageParams
} from "../../components/pageParams/duck/actions";
import {
  listGlobalFeedAticles,
  lisYouretFeedAticles
} from "../../container/ArticleList/duck/action";
import {
  GLOBAL_FEED,
  YOURE_FEED
} from "../../components/pageParams/duck/types";

type IProps = {
  classes: any;
  loading: boolean;
  currentTag?: string;
  currentTap: number;
  updatePageParamsCurrentTaP: any;
  listGlobalFeedAticles: any;
  updatePageParams: any;
  lisYouretFeedAticles: any;
  tabs: string[];
  loggedIn: boolean;
};

class Home extends React.Component<IProps> {
  componentDidMount() {
    if (!this.props.loggedIn)
      this.props.updatePageParams({ tabs: [GLOBAL_FEED] });
    else {
      this.props.updatePageParams({
        tabs: [YOURE_FEED, GLOBAL_FEED],
        currentTap: 1
      });
    }
  }

  handleTabChangeEvent = (event: React.ChangeEvent<{}>, value: any) => {
    this.props.updatePageParamsCurrentTaP({ currentTap: value });
    switch (this.props.tabs[value]) {
      case GLOBAL_FEED:
        this.props.listGlobalFeedAticles();
        break;
      case YOURE_FEED:
        this.props.lisYouretFeedAticles();
        break;
    }
  };

  render() {
    const { classes, loading, tabs, loggedIn, currentTap } = this.props;

    return (
      <Grid container style={{ paddingBottom: 100 }}>
        {!loggedIn && (
          <Grid item xs={12}>
            <Header />
          </Grid>
        )}
        <Grid container className={classes.page}>
          <Grid item xs={12} md={9}>
            <MyTab
              onChange={this.handleTabChangeEvent}
              tabs={tabs}
              value={currentTap}
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
  currentTap: state.pageState.currentTap,
  loggedIn: state.system.loggedIn,
  tabs: state.pageState.tabs
});

export default withStyles(styles)(
  connect(
    mapState,
    {
      updatePageParamsCurrentTaP,
      updatePageParams,
      listGlobalFeedAticles,
      lisYouretFeedAticles
    }
  )(Home)
);
