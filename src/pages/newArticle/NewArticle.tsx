import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { RouteComponentProps, navigate } from "@reach/router";
import { NewArticle } from "../../components/newArticle/NewArticle";
import { IState } from "./IState";
import { createArticle } from "../../api/server";
import { dims } from "../../utils/SystemVariables";

const styles = {
  page: {
    width: dims.pageWidth + 40,
    margin: "auto",
    paddingLeft: 20,
    paddingRight: 20,
    minWidth: 500,
    marginTop: 20
  }
};

class NewPostPage extends React.Component<
  { classes: any } & RouteComponentProps,
  IState
> {
  handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: event.target.value
    });
  };
  handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      describ: event.target.value
    });
  };
  handleUBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      body: event.target.value
    });
  };
  handleUTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      tag: event.target.value
    });
  };
  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (this.state.tags.includes(this.state.tag)) {
      this.setState((state: IState) => ({
        tag: ""
      }));
    } else if (event.keyCode === 13 && this.state.tag !== "") {
      this.setState((state: IState) => ({
        tag: "",
        tags: [...state.tags, state.tag]
      }));
    }
  };
  handleTagCnacelClick = (cancel: string) => {
    this.setState((state: IState) => ({
      tags: state.tags.filter(tag => {
        if (tag !== cancel) return tag;
      })
    }));
  };
  handlePublishEvent = () => {
    const { title, body, describ, tags } = this.state;
    const errors: string[] = [];
    if (title === "")
      errors.push("title can't be blankis too short (minimum is 1 character)");
    if (body === "") errors.push("body can't be blank");
    if (describ === "")
      errors.push(
        "description can't be blankis too short (minimum is 1 character)"
      );

    if (errors.length !== 0) {
      this.setState({ errors: errors });
    } else {
      createArticle({
        title: title,
        description: describ,
        body: body,
        tagList: tags
      })
        .then((res: any) => {
          navigate(`/Article/${res.data.article.slug}`);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  };
  state: IState = {
    title: "",
    body: "",
    describ: "",
    tag: "",
    errors: [],
    tags: []
  };
  render() {
    const { classes } = this.props;
    const { title, body, describ, tag, tags, errors } = this.state;
    return (
      <Grid container className={classes.page}>
        <NewArticle
          errors={errors}
          title={title}
          body={body}
          describetion={describ}
          tag={tag}
          tags={tags}
          handleBodyChange={this.handleUBodyChange}
          handleDescribetionChange={this.handleDescriptionChange}
          handleTagsChange={this.handleUTagChange}
          handleTitleChange={this.handleTitleChange}
          onKeyDown={this.handleKeyDown}
          handleTagCnacelClick={this.handleTagCnacelClick}
          handlePublishEvent={this.handlePublishEvent}
        />
      </Grid>
    );
  }
}
export default withStyles(styles)(NewPostPage);
