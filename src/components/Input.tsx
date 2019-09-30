import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import Input from "@material-ui/core/Input";
import { colors } from "../SystemVariables";

const useStyle = makeStyles({
  input: {
    display: "block",
    border: "1px solid " + colors.TextSecondayColor,
    paddingLeft: 10,
    "&:focus": {
      color: "white"
    }
  },
  focused: {
    borderColor: colors.blue
  }
});
export const MyInput: React.FC<{
  multiline?: Boolean;
  rows?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  placeholder = "",
  className = "",
  multiline = false,
  rows = 1,
  value = "",
  onChange = () => {}
}) => {
  const classes = useStyle();
  if (multiline)
    return (
      <Input
        multiline
        value={value}
        rows={rows}
        placeholder={placeholder}
        classes={{ focused: classes.focused }}
        disableUnderline={true}
        className={(classes.input + " " + className).trim()}
        onChange={onChange}
      />
    );
  else
    return (
      <Input
        value={value}
        placeholder={placeholder}
        classes={{ focused: classes.focused }}
        disableUnderline={true}
        className={(classes.input + " " + className).trim()}
        onChange={onChange}
      />
    );
};
