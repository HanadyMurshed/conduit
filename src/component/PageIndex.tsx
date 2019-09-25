import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { colors } from "../urils";
import { Button } from "@material-ui/core";

interface Props {
  PageCount: number;
  active: number;
}

const style = makeStyles(() => ({
  defualt: {
    width: 20,
    height: 30,
    color: colors.PrimaryColor,
    border: "1 solid" + colors.PrimaryColor
  }
}));
const creatButton = (pageNumber: number) => <Button>pageNumber</Button>;
export default (props: Props) => {
  return <h1>dsa</h1>;
};
