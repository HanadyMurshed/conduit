import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";
import { fontSize, colors } from "../SystemVariables";
import { MyInput } from "./Input";
// import MyInput from "./Input";

const useStyle = makeStyles({
  form: {
    width: "500px",
    "& div": {
      textAlign: "center"
    }
  },
  a: {
    color: colors.PrimaryColor,
    fontSize: 14,
    cursor: "pointer",
    paddingTop: 7,
    "&:hover": {
      color: colors.PrimaryDark,
      textDecoration: "underline"
    }
  },
  title: {
    fontSize: 34,
    opacity: 0.9
  },
  input: {
    width: 500,
    margin: "auto",
    height: 50,
    fontSize: 18,
    marginTop: 16,
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&::placeholder": {
      color: "black"
    }
  },
  button: {
    color: "white",
    fontSize: fontSize.normal,
    background: colors.PrimaryColor,
    marginTop: 16,
    height: 50,
    width: 100,
    marginLeft: 400,
    "&:hover": {
      background: colors.PrimaryDark
    }
  }
});
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

export const SignIn = () => {
  const classes = useStyle();
  return (
    <form className={classes.form}>
      <div>
        <Typography className={classes.title}>Sign In</Typography>
        <Typography className={classes.a}>Don't have an account?</Typography>
        <MyInput className={classes.input} placeholder="Email" />
        <MyInput className={classes.input} placeholder="Password" />
      </div>
      <Button className={classes.button} disableRipple>
        Sign in
      </Button>
    </form>
  );
};
