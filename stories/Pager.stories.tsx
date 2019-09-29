import React from "react";
import { storiesOf } from "@storybook/react";
import { PageIndex } from "../src/components/PageIndex";

storiesOf("Pager", module).add("default", () => (
  <PageIndex active={5} PageCount={50} />
));
