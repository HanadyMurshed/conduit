import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { colors, dims, fontSize, strings } from "../SystemVariables";

const useStyle = makeStyles({
  appBar: {
    position: "relative",
    fontSize: fontSize.normal,
    border: 0,
    boxShadow: "0",
    height: "50px",
    paddingLeft: dims.pageMargie,
    color: colors.TextSecondayColor,
    minWidth: "50px"
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
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    minHeight: "40px",
    height: "50px",
    width: dims.pageWidth,
    minWidth: "50px",
    boxShadow: "none"
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
