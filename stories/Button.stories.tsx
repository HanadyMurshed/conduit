import React from "react";
import { storiesOf } from "@storybook/react";
import NavBarVutton from "../src/component/ButtonNavBar";
import Tag from "../src/component/ButtonTag";
import Index from "../src/component/ButtonIndex";

storiesOf("navigationbar Button", module).add("default", () => (
  <NavBarVutton title="Home" />
));

storiesOf("Tag Button", module)
  .add("default", () => <Tag title="as" />)
  .add("flowers", () => <Tag title="flowers" />)
  .add("happy", () => <Tag title="happy" />);
storiesOf("index page Button", module).add("default", () => (
  <NavBarVutton title="Home" />
));

storiesOf("Pager Index Button", module).add("default", () => (
  <Index index={1} />
));
