import * as React from "react";
import { colors } from "../SystemVariables";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => ({
  listItem: {
    color: colors.darkRed,
    textAlign: "left"
  }
}));

export const ErrorList: React.FC<{
  errors: string[];
}> = ({ errors = [] }) => {
  const classes = useStyle();
  return (
    <ul>
      {errors.map(e => (
        <li key={e} className={classes.listItem}>
          {e}
        </li>
      ))}
    </ul>
  );
};
