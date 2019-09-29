import * as React from "react";
import { colors, strings, fontSize } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
// import { Typography } from "@material-ui/core";

const useStyle = makeStyles({
  headerContainor: {
    background: colors.PrimaryColor,
    height: "180px",
    textAlign: "center"
  },

  title: {
    color: "white",
    lineHeight: "80%",
    textShadow: "0.5 1px" + colors.TextPrimaryColor,
    fontWeight: "bold",
    fontSize: fontSize.larger,
    paddingTop: 50
  },
  welcomeMsg: {
    color: "white",
    lineHeight: "80%",
    fontWeight: "lighter",
    letterSpacing: "2px",
    opacity: 0.8,
    paddingTop: 25,
    fontSize: fontSize.large
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
