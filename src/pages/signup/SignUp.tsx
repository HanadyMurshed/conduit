import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import { SignUp } from "../../components/sign-in-up/SignUp";

const styles = {
  page: {
    margin: "auto",
    minWidth: 500,
    marginTop: 20
  }
};
class SignUpPage extends React.Component<
  { classes: any } & RouteComponentProps
> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.page}>
        <SignUp />
      </Grid>
    );
  }
}
export default withStyles(styles)(SignUpPage);
