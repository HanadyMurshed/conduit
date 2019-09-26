import * as React from "react";
import Index, { style as buttonStyle } from "./ButtonIndex";

interface Props {
  PageCount: number;
  active: number;
}

export default ({ PageCount, active }: Props) => {
  const bottonClasses = buttonStyle();

  return (
    <div>
      {Array.from(Array(PageCount).keys()).map(e => (
        <Index
          propStyle={
            active === e ? bottonClasses.active : bottonClasses.defualt
          }
          index={e}
        />
      ))}
    </div>
  );
};
