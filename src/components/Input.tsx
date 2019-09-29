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
  className?: string;
  placeholder?: string;
}> = ({ placeholder = "", className = "" }) => {
  const classes = useStyle();
  return (
    <Input
      placeholder={placeholder}
      classes={{ focused: classes.focused }}
      disableUnderline={true}
      className={(classes.input + " " + className).trim()}
    />
  );
};
