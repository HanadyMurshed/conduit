import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import Input from "@material-ui/core/Input";
import { colors } from "../SystemVariables";

const style = makeStyles({
  input: {
    border: "1px solid " + colors.TextSecondayColor,
    paddingLeft: 10,
    "&:hover": { borderColor: "blue" },
    "&:focus": {
      backgroundColor: "blue",
      color: "white"
    }
  }
});
export default () => {
  const classes = style();
  return (
    <Input
      placeholder="dsdsadk"
      disableUnderline={true}
      className={classes.input}
    >
      hey
    </Input>
  );
};
