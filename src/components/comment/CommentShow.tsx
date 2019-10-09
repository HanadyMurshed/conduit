import * as React from "react";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import { style } from "./style";
import Delete from "@material-ui/icons/Delete";
import { IProps } from "./IProps";

const useStyle = makeStyles(style);
export const CommenShow: React.FC<IProps> = ({
  className = "",
  deleteButtonShow = false,
  comment,
  onClick = () => {}
}) => {
  const classes = useStyle();
  const { body, createdAt, author, id } = comment;
  const { username, image } = author;
  return (
    <div className={`${classes.root} ${className}`.trim()}>
      <div className={classes.topSection}>
        <Typography className={classes.input}>{body}</Typography>
      </div>
      <div className={`${classes.footer} ${classes.footerSmaller}`}>
        <Avatar
          src={image}
          className={`${classes.avatar} ${classes.avatarSmaller}`}
        />
        <Typography className={classes.username}>{username}</Typography>
        <Typography className={classes.createdAt}>{createdAt}</Typography>
        {deleteButtonShow ? (
          <Delete
            onClick={() => onClick(id)}
            className={`${classes.button} ${classes.buttonSmaller}`}
          />
        ) : null}
      </div>
    </div>
  );
};
