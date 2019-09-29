import React from "react";
import { storiesOf } from "@storybook/react";
import { ButtonNavBar } from "../src/components/ButtonNavBar";
import { ButtonTag } from "../src/components/ButtonTag";
import { Index } from "../src/components/ButtonIndex";

storiesOf("Button Navigation", module).add("default", () => (
  <ButtonNavBar title="Home" />
));

storiesOf("Button ButtonTag", module)
  .add("default", () => <ButtonTag title="as" />)
  .add("flowers", () => <ButtonTag title="flowers" />)
  .add("happy", () => <ButtonTag title="happy" />);

storiesOf("Button Pages indexer", module).add("default", () => (
  <Index index={1} />
));
