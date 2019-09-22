import React, { Children } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Typography";

export interface IProps {
  title: string;
  children?: JSX.Element[];
}
export default ({ title, children }: IProps) => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>{title}</Typography>
        <Button>HOME</Button>
        {children}
      </Toolbar>
    </AppBar>
  );
};
