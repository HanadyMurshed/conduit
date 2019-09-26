import React from "react";
import { storiesOf } from "@storybook/react";
import NavBarVutton from "../src/components/ButtonNavBar";
import Tag from "../src/components/ButtonTag";
import Index from "../src/components/ButtonIndex";

storiesOf("Button Navigation", module).add("default", () => (
  <NavBarVutton title="Home" />
));

storiesOf("Button Tag", module)
  .add("default", () => <Tag title="as" />)
  .add("flowers", () => <Tag title="flowers" />)
  .add("happy", () => <Tag title="happy" />);

storiesOf("Button Pages indexer", module).add("default", () => (
  <Index index={1} />
));
