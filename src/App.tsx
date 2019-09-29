import React from "react";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { MyTab } from "./components/Tab";
import { withStyles } from "@material-ui/styles";

import "./App.css";
import Grid from "@material-ui/core/Grid";
import { dims, colors } from "./SystemVariables";
import { ButtonTag } from "./components/ButtonTag";
import { Typography } from "@material-ui/core";

const styles = {
  page: {
    width: dims.pageWidth,
    margin: "auto",
    minWidth: 500,
    marginTop: 20
  },
  tagPanel: {
    background: colors.lightGray,
    padding: "10px 8px 10px 8px",
    "& .body": {
      paddingTop: 3
    },
    "& .title": {
      color: colors.TextPrimaryColor,
      opacity: 0.8
    }
  }
};
const tags = ["art", "science", "action", "anime", "games", "whatever"];

class App extends React.Component<{ classes: any }> {
  getGlobalFeed = (): JSX.Element => {
    return <p>still not calculated</p>;
  };
  getYourFeed = (): JSX.Element => {
    return <p>still not calculated</p>;
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <NavBar />
          <Header />
        </Grid>
        <Grid container className={classes.page}>
          <Grid item xs={9}>
            <MyTab
              globalFeed={this.getYourFeed()}
              YouFeed={this.getYourFeed()}
            />
          </Grid>
          <Grid item xs={3}>
            <div className={classes.tagPanel}>
              <Typography className="title">Populer Tags</Typography>
              <div className="body">
                {tags.map(e => (
                  <ButtonTag title={e} />
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(App);
