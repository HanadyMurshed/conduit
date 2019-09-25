import React from "react";
import { storiesOf } from "@storybook/react";
import Pager from "../src/component/PageIndex";

storiesOf("Pager", module).add("default", () => (
  <Pager active={5} PageCount={50} />
));
