import React from "react";
import { storiesOf } from "@storybook/react";
import { Pager } from "../src/components/PageIndex";

storiesOf("Pager", module).add("default", () => (
  <Pager active={5} PageCount={50} />
));
