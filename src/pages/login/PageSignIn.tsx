import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import { SignIn } from "../../components/SignUpIn";

const styles = {
  page: {
    margin: "auto",
    minWidth: 500,
    marginTop: 20
  }
};
class SignInPage extends React.Component<
  { classes: any } & RouteComponentProps
> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.page}>
        <SignIn />
      </Grid>
    );
  }
}
export default withStyles(styles)(SignInPage);
