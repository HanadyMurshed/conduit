import * as React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { MyInput } from "../Input";
import { ErrorList } from "../errors";
import { PopperMsg } from "../PoppupMsg";
import { style } from "./style";
import { IProps } from "./IProps";

const useStyle = makeStyles(style);
export const SignIn: React.FC<IProps> = ({
  errors = [],
  email = "",
  password = "",
  popperContent = "",
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
          id="email"
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
        <PopperMsg open={popperOpen} id="email" content={popperContent} />
      </div>
      <Button onClick={onClick} className={classes.button}>
        Sign in
      </Button>
    </div>
  );
};
