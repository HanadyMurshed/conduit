import * as React from "react";
import { Input, Button, Avatar, makeStyles } from "@material-ui/core";
import { style } from "./style";

const useStyle = makeStyles(style);

export const CommentWrite: React.FC<{
  className?: string;
  comment: string;
  image?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}> = ({
  onChange = () => {},
  className = "",
  image = "",
  comment = "",
  onClick = () => {}
}) => {
  const classes = useStyle();

  return (
    <div className={`${classes.root} ${className}`.trim()}>
      <Input
        className={classes.Input}
        multiline
        rows={4}
        onChange={onChange}
        value={comment}
        disableUnderline={true}
        placeholder="Write a comment..."
      />
      <div className={classes.footer}>
        <Avatar className={classes.avatar} src={image} />
        <Button
          onClick={onClick}
          className={`${classes.button} ${classes.buttonGreen}`}
        >
          Post Comment
        </Button>
      </div>
    </div>
  );
};
