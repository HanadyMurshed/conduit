import * as React from "react";
import {
  Typography,
  Button,
  Fade,
  Paper,
  Popper,
  makeStyles
} from "@material-ui/core";
import { MyInput } from "../Input";
import { ErrorList } from "../errors";
import ErrorIcon from "@material-ui/icons/Error";
import { style } from "./style";
import { IProps } from "./IProps";

const useStyle = makeStyles(style);
export const SignIn: React.FC<IProps> = ({
  errors = [],
  email = "",
  password = "",
  popperContent = "",
  popperAchorE = null,
  popperOpen = false,
  onClick = () => {},
  handleFocusInput = () => {},
  handleEmailChange = () => {},
  handlePasswordChange = () => {},
  handleNoAccount = () => {}
}) => {
  const classes = useStyle();
  return (
    <div className={classes.form}>
      <div>
        <Typography className={classes.title}>Sign In</Typography>
        <Typography onClick={handleNoAccount} className={classes.a}>
          Need an account?
        </Typography>
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
