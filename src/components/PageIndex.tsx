import * as React from "react";
import { Index, useStyle } from "./ButtonIndex";

export const PageIndex: React.FC<{
  PageCount: number;
  active: number;
}> = ({ PageCount, active }) => {
  const bottonClasses = useStyle();

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
