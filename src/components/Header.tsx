import * as React from "react";
import { colors, strings, fontSize } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core";
// import { Typography } from "@material-ui/core";

const useStyle = makeStyles({
  headerContainor: {
    background: colors.PrimaryColor,
    height: "170px",
    textAlign: "center",
    boxShadow: "inset 0px 0px 5px 1px rgba(0,0,0,0.42)"
  },

  title: {
    fontFamily: "Titillium Web",
    color: "white",
    lineHeight: "80%",
    textShadow: "2px 2px 2px rgba(0,0,0,0.2)",
    fontWeight: "bold",
    fontSize: fontSize.larger,
    paddingTop: 45
  },
  welcomeMsg: {
    fontSize: fontSize.large,
    color: "white",
    lineHeight: "80%",
    fontWeight: 100,
    opacity: 0.8,
    paddingTop: 25
  }
});
export const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.headerContainor}>
      <Typography className={classes.title}>{strings.websiteName}</Typography>
      <Typography className={classes.welcomeMsg}>
        {strings.HeaderWelcomeMessage}
      </Typography>
      {/* <Typography variant="h2">{strings.websiteName}</Typography>,
        <Typography variant="h6">{strings.HeaderWelcomeMessage}</Typography> */}
    </div>
  );
};
