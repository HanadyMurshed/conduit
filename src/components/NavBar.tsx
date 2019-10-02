import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { colors, dims, fontSize, strings } from "../SystemVariables";

const useStyle = makeStyles({
  appBar: {
    fontSize: fontSize.normal,
    height: "50px",
    color: colors.TextSecondayColor,
    maxWidth: dims.pageWidth + 40,
    margin: "auto",
    width: "100%"
  },
  title: {
    fontFamily: "Titillium Web",

    fontSize: fontSize.large,
    flexGrow: 1,
    pointerEvent: "none",
    fontWeight: "bold",
    color: colors.PrimaryColor,
    "&:hover": {
      cursor: "pointer"
    }
  },
  toolbar: {
    minHeight: "40px",
    height: "50px"
  }
});

export const NavBar: React.FC<{}> = ({ children }) => {
  const classes = useStyle();
  return (
    <AppBar
      elevation={0}
      className={classes.appBar}
      position="static"
      color="inherit"
    >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          {strings.websiteName}
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};
