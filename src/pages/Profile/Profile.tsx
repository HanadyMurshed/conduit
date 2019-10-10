import * as React from "react";
import { Grid, withStyles, Typography } from "@material-ui/core";
import { MyTab } from "../../components/Tab";
import { defaultValues } from "../../utils/SystemVariables";
import { UserHeader } from "../../components/HeaderUser";
import {
  listArticles,
  getProfile,
  unFavoriteArticle,
  FavoriteArticle,
  getCurrentUser
} from "../../api/server";
import { IArticle } from "../../types/conduit.types";
import Article from "../../components/article/Article";
import { PageIndex } from "../../components/PageIndex";
import { styles } from "./styles";
import { IState } from "./IState";
import { IProps } from "./IProps";
import { Redirect } from "react-router-dom";

class Profile extends React.Component<IProps, IState> {
  state: IState = {
    articles: [],
    username: "",
    count: 0,
    pageCount: 0,
    currentPage: 0,
    author: { username: "", email: "", bio: "", image: defaultValues.avatar },
    tabs: ["My Articles", "Favoriteed Articles"],
    selectedTab: 0,
    toSetting: false,
    toHome: false
  };
  componentDidMount() {
    const { username } = this.props.match.params;
    this.setProfile(username);
  }

  setProfile(username: string) {
    getProfile(username)
      .then((res: any) => {
        listArticles({ author: username, limit: 10 })
          .then((response: any) => {
            const count = Math.ceil(response.data.articlesCount / 10);
            this.setState({
              author: res.data.profile,
              articles: response.data.articles,
              pageCount: count,
              username: username
            });
          })
          .catch((err: any) =>
            this.setState({
              currentPage: 0,
              author: res.data.profile,
              username: username
            })
          );
      })
      .catch((err: any) => this.setState({ toHome: true }));
  }

  handleFavoritEvent = (favorited: Boolean, slug: string) => {
    let favoriteToggle = favorited
      ? unFavoriteArticle(slug)
      : FavoriteArticle(slug);
    favoriteToggle.then((res: any) => {}).catch();
  };

  // static getDerivedStateFromProps(props: IProps, prevState: IState) {
  //   const { username } = props;
  //   console.log(props, prevState);
  //   if (username === prevState.author.username) return null;
  //   else if (props.username) {
  //     getProfile(props.username).then((response: any) => {
  //       const author = response.data.profile;

  //       listArticles({ author: props.username, limit: 10 }).then(
  //         (response: any) => {
  //           const count = Math.ceil(response.data.articlesCount / 10);
  //           const articles = response.data.articles;
  //           console.log("halllo");
  //           return {
  //             author: author,
  //             articles: articles,
  //             pageCount: count
  //           };
  //         }
  //       );
  //     });
  //   }
  //   return null;
  // }
  componentWillReceiveProps(nextProps: IProps) {
    const { username } = nextProps.match.params;
    this.setProfile(username);
  }

  getGlobalFeed = (queryparams: any) => {
    listArticles(queryparams)
      .then((response: any) => {
        const count = Math.ceil(response.data.articlesCount / 10);
        this.setState({ articles: response.data.articles, pageCount: count });
      })
      .catch();
  };

  getuserInformation = (username: string) => {
    getProfile(username)
      .then((response: any) => {
        this.setState({ author: response.data.profile });
      })
      .catch();
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
    this.setState({ toSetting: false });
  };

  render() {
    const { classes, loggedUser } = this.props;
    const {
      articles,
      pageCount,
      currentPage,
      tabs,
      author,
      selectedTab,
      toSetting,
      toHome
    } = this.state;
    const { username, image } = author;

    if (toSetting) return <Redirect to="/settings" />;
    if (!author || toHome) return <Redirect to="/" />;
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
                {articles.length !== 0 ? (
                  articles.map((e: IArticle) => (
                    <Article key={e.slug} article={e} />
                  ))
                ) : (
                  <Typography style={{ color: "black", opacity: 0.6 }}>
                    No article found yst
                  </Typography>
                )}
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

export default withStyles(styles)(Profile);
