import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import { NewPost } from "./components/NewPost";

const styles = {
  page: {
    minWidth: 500,
    marginTop: 20
  }
};
class NewPostPage extends React.Component<
  { classes: any } & RouteComponentProps
> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.page}>
        <NewPost />
      </Grid>
    );
  }
}
export default withStyles(styles)(NewPostPage);
