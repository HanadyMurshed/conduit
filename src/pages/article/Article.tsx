import * as React from "react";
import { Grid, withStyles, Typography } from "@material-ui/core";
import { Link, navigate } from "@reach/router";
import { RouteComponentProps } from "@reach/router";
import { HeaderArticle } from "../../components/HeaderArticle";
import {
  getAnArticle,
  getCurrentUser,
  getCommentsByArticles,
  deleteComment,
  addCommentToArticle
} from "../../api/server";
import { styles } from "./styles";
import { CommentWrite } from "../../components/comment/CommentWrite";
import { IProps } from "./IProps";
import { IState } from "./IState";
import { defaultValues } from "../../SystemVariables";
import { CommenShow } from "../../components/comment/CommentShow";

class Article extends React.Component<
  IProps & RouteComponentProps<{ slug: string }>,
  IState
> {
  state: IState = {
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
      author: { username: "", email: "", bio: "", image: "" }
    },
    username: "",
    commentList: [],
    currentComment: "",
    image: defaultValues.avatar
  };

  componentDidMount() {
    const { slug } = this.props;
    if (!slug) navigate("/");
    else {
      getCurrentUser().then((res: any) => {
        if (res.data.user.image) {
          this.setState({ image: res.data.user.image });
        }

        this.setState({
          username: res.data.user.username
        });
      });

      getAnArticle(slug).then((response: any) => {
        this.setState({ article: response.data.article }, () =>
          this.getComments(response.data.article.slug)
        );
      });
    }
  }
  getComments = (slug: string) => {
    getCommentsByArticles(slug)
      .then((res: any) => {
        this.setState({
          commentList: res.data.comments
        });
      })
      .catch();
  };
  deleteComment = (id: string) => {
    const { slug } = this.props;
    if (slug)
      deleteComment(slug, id).then((res: any) => {
        this.getComments(slug);
      });
  };
  addComment = (comment: string) => {
    const { slug } = this.props;
    if (slug)
      addCommentToArticle(comment, slug)
        .then((res: any) => {
          this.setState({ currentComment: "" }, () => this.getComments(slug));
        })
        .catch((err: any) => {
          console.log(err);
        });
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
      article,
      commentList,
      currentComment
    } = this.state;
    const { title, body, author, createdAt } = article;
    const { username: authoName, image: autherImage } = author;

    const logged: boolean = Boolean(sessionStorage.getItem("token"));
    return (
      <Grid container style={{ paddingBottom: 100 }}>
        <Grid item xs={12}>
          <HeaderArticle
            createdAt={createdAt}
            title={title}
            image={autherImage}
            username={authoName}
          />
          <Grid className={classes.page} item xs={12}>
            <Typography>{body}</Typography>
            <div className={classes.footer}>
              {!logged ? (
                <Typography>
                  <Link className={classes.link} to="/sign-in">
                    Sign in
                  </Link>{" "}
                  or{" "}
                  <Link className={classes.link} to="/sign-up">
                    sign un
                  </Link>{" "}
                  to add comments on this article.
                </Typography>
              ) : (
                <CommentWrite
                  onChange={this.handleCommentChange}
                  onClick={this.handlePostComment}
                  comment={currentComment}
                  image={image}
                  className={classes.comment}
                />
              )}
              {commentList.map(e => {
                if (e.author.username === username)
                  return (
                    <CommenShow
                      onClick={this.deleteComment}
                      deleteButtonShow={true}
                      key={e.id}
                      comment={e}
                      className={classes.comment}
                    />
                  );
                else
                  return <CommenShow comment={e} className={classes.comment} />;
              })}
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Article);
