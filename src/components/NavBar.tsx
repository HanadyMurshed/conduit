import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { colors, dims, fontSize, strings } from "../SystemVariables";

const style = makeStyles({
  appBar: {
    fontSize: fontSize.normal,
    border: 0,
    boxShadow: "0",
    height: "55px",
    MINPAD: dims.pageMargie,
    paddingLeft: dims.pageMargie,
    color: colors.TextSecondayColor
  },
  title: {
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
    minHeight: "55px"
  }
});

export const NavBar: React.FC<{}> = () => {
  const classes = style();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          {strings.websiteName}
        </Typography>
        {React.Children}
      </Toolbar>
    </AppBar>
  );
};
