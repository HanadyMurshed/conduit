import React from "react";
import { storiesOf } from "@storybook/react";
import NavBarVutton from "../src/component/NavBarVutton";
import Tag from "../src/component/tag";

storiesOf("navigationbar Button", module).add("default", () => (
  <NavBarVutton title="Home" />
));

storiesOf("Tag Button", module)
  .add("default", () => <Tag title="as" />)
  .add("flowers", () => <Tag title="flowers" />)
  .add("happy", () => <Tag title="happy" />);
