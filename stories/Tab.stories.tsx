import { MyTab } from "../src/components/Tab";
import { storiesOf } from "@storybook/react";
import React from "react";

storiesOf("Tab", module).add("Not logged in", () => (
  <MyTab tabs={["global feed", "your feed"]}>
    <h1>hey</h1>
    <h1>ok</h1>
  </MyTab>
));
