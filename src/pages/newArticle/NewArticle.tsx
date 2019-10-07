import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import { NewArticle } from "../../components/newArticle/NewArticle";
import { IState } from "./IState";
import { createArticle } from "../../api/server";

const styles = {
  page: {
    minWidth: 500,
    marginTop: 20
  }
};

class NewPostPage extends React.Component<
  { classes: any } & RouteComponentProps
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
    if (
      event.keyCode === 13 &&
      this.state.tag !== "" &&
      !this.state.tags.includes(this.state.tag)
    ) {
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

    if (errors !== []) this.setState({ errors: errors });
    else {
      createArticle({
        title: title,
        description: describ,
        body: body,
        tagList: tags
      }).then();
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
