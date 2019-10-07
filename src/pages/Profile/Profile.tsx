import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { MyTab } from "../../components/Tab";
import { defaultValues } from "../../SystemVariables";
import { RouteComponentProps, navigate } from "@reach/router";
import { UserHeader } from "../../components/HeaderUser";
import { listArticles, getProfile } from "../../api/server";
import { IArticle } from "../../types/conduit.types";
import { Article } from "../../components/article/Article";
import { PageIndex } from "../../components/PageIndex";
import { styles } from "./styles";
import { IState } from "./IState";

class Home extends React.Component<
  { classes: any; loggedUser: string } & RouteComponentProps<{
    username: string | null;
  }>,
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

  handleFollowEvent = () => {};
  handleEditProfileEvent = () => {
    navigate("/settings");
  };

  render() {
    const { classes, loggedUser } = this.props;
    const {
      articles,
      pageCount,
      currentPage,
      tabs,
      author,
      selectedTab
    } = this.state;
    const { username, image } = author;

    return (
      <Grid container style={{ paddingBottom: 100 }}>
        <Grid item xs={12}>
          <UserHeader
            avatar={image}
            username={username}
            onClick={
              username === loggedUser
                ? this.handleEditProfileEvent
                : this.handleFollowEvent
            }
            ButtonText={
              username === loggedUser
                ? "Edit User Profile"
                : `Follow ${username}`
            }
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
