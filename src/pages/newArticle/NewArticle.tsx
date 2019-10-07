import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import { NewArticle } from "../../components/newArticle/NewArticle";

interface IState {}
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
        <NewArticle />
      </Grid>
    );
  }
}
export default withStyles(styles)(NewPostPage);
