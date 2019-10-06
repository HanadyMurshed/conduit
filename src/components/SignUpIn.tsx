import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button, Fade, Paper, Popper } from "@material-ui/core";
import { fontSize, colors } from "../SystemVariables";
import { MyInput } from "./Input";
import { ReferenceObject } from "popper.js";
import { ErrorList } from "./errors";
import ErrorIcon from "@material-ui/icons/Error";

// import MyInput from "./Input";

const useStyle = makeStyles({
  form: {
    margin: "auto",
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
    textTransform: "none",
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
  },
  Popper: {
    padding: 5,
    fontSize: 14,
    color: colors.TextPrimaryColor
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

export const SignIn: React.FC<{
  errors?: string[];

  email?: string;
  password?: string;

  popperAchorE?: ReferenceObject | null;
  popperOpen?: boolean;
  popperContent?: string;

  onClick?: (event: any) => void;
  handleEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocusInput?: () => void;
}> = ({
  errors = [],
  email = "",
  password = "",
  popperContent = "",
  popperAchorE = null,
  popperOpen = false,
  onClick = () => {},
  handleFocusInput = () => {},
  handleEmailChange = () => {},
  handlePasswordChange = () => {}
}) => {
  const classes = useStyle();
  return (
    <div className={classes.form}>
      <div>
        <Typography className={classes.title}>Sign In</Typography>
        <Typography className={classes.a}>Need an account?</Typography>
        {errors && errors !== [] ? <ErrorList errors={errors} /> : null}

        <MyInput
          onfocus={handleFocusInput}
          id="emailInput"
          onChange={handleEmailChange}
          className={classes.input}
          placeholder="Email"
          value={email}
        />
        <MyInput
          onChange={handlePasswordChange}
          className={classes.input}
          placeholder="Password"
          value={password}
          type="password"
        />
        <Popper open={popperOpen} anchorEl={popperAchorE} transition>
          {({ TransitionProps }: any) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography className={classes.Popper}>
                  <ErrorIcon style={{ height: 14, color: "#ffa300" }} />

                  {popperContent}
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
      <Button onClick={onClick} className={classes.button}>
        Sign in
      </Button>
    </div>
  );
};
