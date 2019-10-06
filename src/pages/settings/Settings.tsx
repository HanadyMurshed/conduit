import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import { Settings } from "../../components/Settings";

const styles = {
  page: {
    minWidth: 500,
    marginTop: 20
  }
};

interface IState {
  username: string;
  bio: string;
  url: string;
  email: string;
  password: string;
}
class SettingsPage extends React.Component<
  { classes: any } & RouteComponentProps
> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.page}>
        <Settings userName="Hanady" email="Hanady@gmail.com" />
      </Grid>
    );
  }
}
export default withStyles(styles)(SettingsPage);
