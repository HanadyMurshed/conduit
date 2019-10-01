import * as React from "react";
import { colors, fontSize, defaultValues } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
// import { Typography } from "@material-ui/core";

const useStyle = makeStyles({
  headerContainor: {
    background: colors.lightGray,
    height: "200px",
    paddingTop: 40,
    textAlign: "center"
  },
  avatar: {
    margin: "auto",
    width: 100,
    height: 100
  },
  button: {
    textTransform: "none",
    height: "auto",
    opacity: 0.6,
    marginTop: 15,
    padding: "1px 10px 1px 10px",
    color: colors.TextPrimaryColor,
    border: "solid 1px" + colors.TextPrimaryColor
  },
  username: {
    margin: "auto",
    color: colors.TextPrimaryColor,
    lineHeight: "80%",
    fontWeight: "bold",
    letterSpacing: "2px",
    width: "auto",
    marginTop: 20,
    fontSize: fontSize.large
  }
});
export const UserHeader: React.FC<{
  username: string;
  avatar?: string;
  ButtonText: string;
  onClick?: () => void;
}> = ({
  username,
  ButtonText,
  avatar = defaultValues.avatar,
  onClick = () => {}
}) => {
  const classes = useStyle();
  return (
    <div className={classes.headerContainor}>
      <Avatar className={classes.avatar} src={avatar} />
      <Typography className={classes.username}>{username}</Typography>
      <Button className={classes.button} onClick={onClick}>
        {ButtonText}
      </Button>
    </div>
  );
};
