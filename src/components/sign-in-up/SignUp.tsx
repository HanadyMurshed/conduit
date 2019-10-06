import * as React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { MyInput } from "../Input";
import { style } from "./style";

const useStyle = makeStyles(style);
export const SignUp = () => {
  const classes = useStyle();
  return (
    <form className={classes.form}>
      <div>
        <Typography className={classes.title}>Sign Up</Typography>
        <Typography className={classes.a}>Have an account?</Typography>
        <MyInput className={classes.input} placeholder="Username" />
        <MyInput className={classes.input} placeholder="Email" />
        <MyInput className={classes.input} placeholder="Password" />
      </div>
      <Button className={classes.button} disableRipple>
        Sign in
      </Button>
    </form>
  );
};
