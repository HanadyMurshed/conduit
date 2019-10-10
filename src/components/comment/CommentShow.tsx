import * as React from "react";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import { style } from "./style";
import Delete from "@material-ui/icons/Delete";
import { IProps } from "./IProps";
import { Link } from "react-router-dom";
import { colors } from "../../utils/SystemVariables";
import { formatDate } from "../../utils/Helpers";

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
        <Link
          style={{ textDecoration: "none", color: colors.TextPrimaryColor }}
          to={`/user/${username}`}
        >
          <Typography className={classes.username}>{username}</Typography>
        </Link>
        <Typography className={classes.createdAt}>
          {formatDate(createdAt + "")}
        </Typography>
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
