import * as React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { MyTab } from "./components/Tab";
import { colors, dims } from "./SystemVariables";
import { ButtonTag } from "./components/ButtonTag";
import { RouteComponentProps } from "@reach/router";
import { Header } from "./components/Header";
const tags = ["art", "science", "action", "anime", "games", "whatever"];

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
      opacity: 0.7
    }
  }
};
class Home extends React.Component<{ classes: any } & RouteComponentProps> {
  getGlobalFeed = (): JSX.Element => {
    return <p>still not calculated</p>;
  };
  getYourFeed = (): JSX.Element => {
    return <p>still not calculated</p>;
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container className={classes.page}>
          <Grid item xs={12} md={9}>
            <MyTab
              globalFeed={this.getYourFeed()}
              YouFeed={this.getYourFeed()}
            ></MyTab>
          </Grid>
          <Grid item xs={12} md={3}>
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
export default withStyles(styles)(Home);
