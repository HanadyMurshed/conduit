import * as React from "react";
import { Grid, withStyles, Typography } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { HeaderArticle } from "../../components/HeaderArticle";
import {
  getCurrentUser,
  getCommentsByArticles,
  deleteComment,
  addCommentToArticle,
  getAnArticle
} from "../../api/server";
import { styles } from "./styles";
import { CommentWrite } from "../../components/comment/CommentWrite";
import { IProps } from "./IProps";
import { IState } from "./IState";
import { defaultValues } from "../../utils/SystemVariables";
import { CommenShow } from "../../components/comment/CommentShow";
import { colors } from "../../utils/SystemVariables";
import SignInMsg from "../../container/SignInMsg";

class Article extends React.Component<IProps, IState> {
  state: IState = {
    username: "",
    commentList: [],
    currentComment: "",
    image: defaultValues.avatar,
    toHome: false,
    article: {
      slug: "",
      title: "",
      description: "",
      body: "",
      tagList: [],
      createdAt: "",
      updatedAt: "",
      favorited: false,
      favoritesCount: 0,
      author: { username: "", bio: "", following: false, image: "" }
    }
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ article: this.props.location.state.article });
    } else {
      getAnArticle(this.props.match.params.slug)
        .then((res: any) => {
          if (res.data.article == {}) this.setState({ toHome: true });
          this.setState({ article: res.data.article });
        })
        .catch((err: any) => this.setState({ toHome: true }));
    }
    getCurrentUser()
      .then((res: any) => {
        if (res.data.user.image) {
          this.setState({ image: res.data.user.image });
        }

        this.setState({
          username: res.data.user.username
        });
      })
      .catch();
    this.getComments(this.props.match.params.slug);
  }
  getComments = (slug: string) => {
    getCommentsByArticles(slug)
      .then((res: any) => {
        this.setState({
          commentList: res.data.comments
        });
      })
      .catch((err: any) => this.setState({ toHome: true }));
  };
  deleteComment = (id: string) => {
    const { slug } = this.props.match.params;
    if (slug)
      deleteComment(slug, id)
        .then((res: any) => {
          this.getComments(slug);
        })
        .catch();
  };
  addComment = (comment: string) => {
    const { slug } = this.props.match.params;
    if (slug)
      addCommentToArticle(comment, slug)
        .then((res: any) => {
          this.setState({ currentComment: "" }, () => this.getComments(slug));
        })
        .catch((err: any) => {});
  };
  handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentComment: e.currentTarget.value });
  };
  handlePostComment = () => {
    if (this.state.currentComment) this.addComment(this.state.currentComment);
  };
  render() {
    const { classes } = this.props;
    const {
      username,
      image,
      commentList,
      currentComment,
      toHome,
      article
    } = this.state;
    const { title, body, author, createdAt } = article;
    const { username: authoName, image: autherImage } = author;

    if (toHome) return <Redirect to="/" />;
    return (
      <Grid container style={{ paddingBottom: 100 }}>
        <Grid item xs={12}>
          <HeaderArticle
            createdAt={createdAt}
            title={title}
            image={autherImage}
            usernameLink={
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={`/user/${authoName}`}
              >
                <Typography>{authoName}</Typography>
              </Link>
            }
          />
          <Grid className={classes.page} item xs={12}>
            <Typography>{body}</Typography>
            <div className={classes.footer}>
              <SignInMsg />
              <CommentWrite
                onChange={this.handleCommentChange}
                onClick={this.handlePostComment}
                comment={currentComment}
                image={image}
                className={classes.comment}
              />
              {commentList.map(e => {
                if (e.author.username === username)
                  return (
                    <CommenShow
                      onClick={this.deleteComment}
                      deleteButtonShow={true}
                      key={e.id}
                      comment={e}
                      usernameLink={
                        <Link
                          style={{
                            textDecoration: "none",
                            color: colors.TextPrimaryColor
                          }}
                          to={`/user/${e.author.username}`}
                        >
                          <Typography className={classes.username}>
                            {e.author.username}
                          </Typography>
                        </Link>
                      }
                      className={classes.comment}
                    />
                  );
                else
                  return (
                    <CommenShow
                      key={e.id}
                      comment={e}
                      className={classes.comment}
                    />
                  );
              })}
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Article);
