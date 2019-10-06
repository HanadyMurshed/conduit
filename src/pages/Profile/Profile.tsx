import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { MyTab } from "../../components/Tab";
import { colors, dims, defaultValues } from "../../SystemVariables";
import { RouteComponentProps } from "@reach/router";
import { UserHeader } from "../../components/HeaderUser";
import { listArticles, getProfile } from "../../api/server";
import { IArticle, IAuther } from "../../types/conduit.types";
import { Article } from "../../components/article/Article";
import { PageIndex } from "../../components/PageIndex";

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
  pageCount: number;
  currentPage: number;
  tabs: string[];
  author: IAuther;
  selectedTab: number;
}
class Home extends React.Component<
  { classes: any } & RouteComponentProps<{ username: string }>,
  IState
> {
  state: IState = {
    articles: [],
    count: 0,
    pageCount: 0,
    currentPage: 0,
    author: { username: "", email: "", bio: "", image: defaultValues.avatar },
    tabs: ["My Articles", "Favoriteed Articles"],
    selectedTab: 0
  };

  componentDidMount() {
    if (!this.props.username) return;
    this.getGlobalFeed({ author: this.props.username, limit: 10 });
    this.getuserInformation(this.props.username);
  }

  getGlobalFeed = (queryparams: any) => {
    listArticles(queryparams).then((response: any) => {
      const count = Math.ceil(response.data.articlesCount / 10);
      this.setState({ articles: response.data.articles, pageCount: count });
    });
  };

  getuserInformation = (username: string) => {
    getProfile(username).then((response: any) => {
      this.setState({ author: response.data.profile });
    });
  };
  handleIndexClickEvent = (index: number) => {
    this.setState(
      {
        currentPage: index
      },
      () =>
        this.getGlobalFeed({
          author: this.state.author.username,
          limit: 10,
          offset: index * 10
        })
    );
  };

  handleTabChangeEvent = (event: React.ChangeEvent<{}>, value: any) => {
    let params = {};
    if (value === 1) {
      params = {
        favorited: this.state.author.username,
        limit: 10
      };
    } else params = { author: this.state.author.username, limit: 10 };

    this.setState({ selectedTab: value }, () => this.getGlobalFeed(params));
  };

  render() {
    const { classes } = this.props;
    const {
      articles,
      pageCount,
      currentPage,
      tabs,
      author,
      selectedTab
    } = this.state;
    const { username, email, bio, image } = author;

    return (
      <Grid container style={{ paddingBottom: 100 }}>
        <Grid item xs={12}>
          <UserHeader
            avatar={image}
            username={username}
            ButtonText={`Follow ${username}`}
          />
        </Grid>

        <Grid container className={classes.page}>
          <Grid item xs={12}>
            <MyTab
              onChange={this.handleTabChangeEvent}
              tabs={tabs}
              value={selectedTab}
            >
              <div>
                {articles.map((e: IArticle) => (
                  <Article key={e.slug} article={e} />
                ))}
              </div>
            </MyTab>
            {pageCount && pageCount > 1 ? (
              <PageIndex
                onClick={this.handleIndexClickEvent}
                style={{ marginTop: 20 }}
                active={currentPage}
                PageCount={pageCount}
              />
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
