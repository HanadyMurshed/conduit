import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { colors, dims } from "../urils";

export interface IProps {
  title: string;
  children?: JSX.Element[] | JSX.Element;
}

const style = makeStyles({
  appBar: {
    fontSize: 16,
    border: 0,
    boxShadow: "0",
    outline: 0,
    paddingLeft: "50px",
    color: colors.TextSecondayColor
  },
  title: {
    fontSize: 26,
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

export default ({ title, children }: IProps) => {
  const classes = style();
  return (
    <AppBar color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <div className={classes.rightBlock}>{children}</div>
      </Toolbar>
    </AppBar>
  );
};
