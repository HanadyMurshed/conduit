import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/component/Button";
storiesOf("ColorButton", module)
  .add("red", () => <Button color="red" />)
  .add("blue", () => <Button color="blue" />);
