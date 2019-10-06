import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import Input from "@material-ui/core/Input";
import { colors } from "../SystemVariables";

const useStyle = makeStyles({
  input: {
    display: "block",
    border: "1px solid #d9d9d9",
    borderRadius: 3,
    color: colors.TextPrimaryColor,
    "&:focus": {
      color: "white"
    },
    "&::placeholder": {
      color: "red"
    }
  },
  focused: {
    borderColor: colors.blue
  }
});
export const MyInput: React.FC<{
  id?: string;
  ref?: React.RefObject<unknown>;
  multiline?: Boolean;
  rows?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onfocus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  onfocus = () => {},
  id,
  ref,
  placeholder = "",
  className = "",
  multiline = false,
  rows = 1,
  value = "",
  type = "input",
  onChange = () => {}
}) => {
  const classes = useStyle();
  if (multiline)
    return (
      <Input
        id={id}
        ref={ref}
        type={type}
        multiline
        value={value}
        onFocus={onfocus}
        rows={rows}
        placeholder={placeholder}
        classes={{ focused: classes.focused }}
        disableUnderline={true}
        className={`${classes.input} ${className}`.trim()}
        onChange={onChange}
      />
    );
  else
    return (
      <Input
        id={id}
        onFocus={onfocus}
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        classes={{ focused: classes.focused }}
        disableUnderline={true}
        className={`${classes.input} ${className}`.trim()}
        onChange={onChange}
      />
    );
};
