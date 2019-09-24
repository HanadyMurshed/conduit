import React from "react";
import { storiesOf } from "@storybook/react";
import NavBarVutton from "../src/component/NavBarVutton";

storiesOf("NavBarButton", module).add("not logged", () => (
  <NavBarVutton title="Home" />
));
