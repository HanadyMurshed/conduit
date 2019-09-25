import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import Index, { style as buttonStyle } from "./ButtonIndex";

interface Props {
  PageCount: number;
  active: number;
}

export default ({ PageCount, active }: Props) => {
  const bottonClasses = buttonStyle();
  {
    console.log(Array(PageCount).keys());
  }

  return (
    <div>
      {Array.from(Array(PageCount).keys()).map(e => (
        <Index
          propStyle={active == e ? bottonClasses.active : bottonClasses.defualt}
          index={e}
        />
      ))}
    </div>
  );
};
