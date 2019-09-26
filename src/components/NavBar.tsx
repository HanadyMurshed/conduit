import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { colors, dims, fontSize, strings } from "../SystemVariables";

export interface IProps {
  children?: JSX.Element[] | JSX.Element;
}

const style = makeStyles({
  appBar: {
    fontSize: fontSize.normal,
    border: 0,
    boxShadow: "0",
    outline: 0,
    paddingLeft: "50px",
    color: colors.TextSecondayColor
  },
  title: {
    fontSize: fontSize.large,
    marginLeft: dims.pageMargie,
    flexGrow: 1,
    pointerEvent: "none",
    fontWeight: "bold",
    color: colors.PrimaryColor,
    "&:hover": {
      cursor: "pointer"
    }
  },
  rightBlock: {
    marginRight: dims.pageMargie
  }
});

export default ({ children }: IProps) => {
  const classes = style();
  return (
    <AppBar color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {strings.websiteName}
        </Typography>
        <div className={classes.rightBlock}>{children}</div>
      </Toolbar>
    </AppBar>
  );
};
