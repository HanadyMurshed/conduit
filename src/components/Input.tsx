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
  multiline?: Boolean;
  rows?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onfocus?: () => void;
  onkeydown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  onfocus = () => {},
  id,
  placeholder = "",
  className = "",
  multiline = false,
  rows = 1,
  value = "",
  type = "input",
  onChange = () => {},
  onkeydown = () => {}
}) => {
  const classes = useStyle();
  if (multiline)
    return (
      <Input
        id={id}
        type={type}
        multiline
        value={value}
        onKeyDown={onkeydown}
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
        onKeyDown={onkeydown}
        onFocus={onfocus}
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
