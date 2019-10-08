import * as React from "react";
import { Button, Avatar, makeStyles, Typography } from "@material-ui/core";
import { style } from "./style";
import Delete from "@material-ui/icons/Delete";

const useStyle = makeStyles(style);
export const CommenShow = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.topSection}>
        <Typography className={classes.input}>Hnady</Typography>
      </div>
      <div className={`${classes.footer} ${classes.footerSmaller}`}>
        <Avatar className={`${classes.avatar} ${classes.avatarSmaller}`} />
        <Typography className={classes.username}>Hnady</Typography>
        <Typography className={classes.createdAt}>Hnady</Typography>
        <Delete className={`${classes.button} ${classes.buttonSmaller}`} />
      </div>
    </div>
  );
};
