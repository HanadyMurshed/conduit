import React from "react";
import { storiesOf } from "@storybook/react";
import { ButtonNavBar } from "../src/components/ButtonNavBar";
import { ButtonTag } from "../src/components/ButtonTag";
import { Index } from "../src/components/ButtonIndex";

storiesOf("Buttons", module)
  .add("Tag Button", () => <ButtonTag title="as" />)
  .add("NavBar Button", () => <ButtonNavBar title="Home" />)
  .add("Pager Button", () => <Index index={1} />);
