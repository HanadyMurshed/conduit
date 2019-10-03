import * as React from "react";
import { Index, useStyle } from "./ButtonIndex";

export const PageIndex: React.FC<{
  style?: any;
  PageCount: number;
  active: number;
  onClick?: (index: number) => void;
}> = ({ PageCount, active, style, onClick = () => {} }) => {
  const bottonClasses = useStyle();

  return (
    <div style={style}>
      {Array.from(Array(PageCount).keys()).map(e => (
        <Index
          onClick={onClick}
          key={e + 1}
          propStyle={
            active === e ? bottonClasses.active : bottonClasses.defualt
          }
          index={e + 1}
        />
      ))}
    </div>
  );
};
