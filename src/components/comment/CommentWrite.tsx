import * as React from "react";
import { Input, Button, Avatar, makeStyles } from "@material-ui/core";
import { style } from "./style";

const useStyle = makeStyles(style);

export const CommentWrite = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Input
        className={classes.Input}
        multiline
        rows={3}
        disableUnderline={true}
        placeholder="Write a comment..."
      />
      <div className={classes.footer}>
        <Avatar className={classes.avatar} />
        <Button className={`${classes.button} ${classes.buttonGreen}`}>
          Post Comment
        </Button>
      </div>
    </div>
  );
};
