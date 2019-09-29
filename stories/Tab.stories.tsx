import { MyTab } from "../src/components/Tab";
import { storiesOf } from "@storybook/react";
import React from "react";

storiesOf("Tab", module).add("Not logged in", () => (
  <MyTab globalFeed={<h3>ok</h3>} YouFeed={<h1>fdsfs</h1>} />
));
