import React from "react";
import { storiesOf } from "@storybook/react";
import NavBar from "../src/component/NavBar";
import NavBarVutton from "../src/component/ButtonNavBar";
storiesOf("Navigation Bar", module)
  .add("not logged", () => (
    <NavBar title="conduit">
      <NavBarVutton title="Home" />
      <NavBarVutton title="Sign Up" />
      <NavBarVutton title="Sign In" />
    </NavBar>
  ))
  .add("logged", () => (
    <NavBar title="conduit">
      <NavBarVutton title="Home" />
      <NavBarVutton title="New Post" />
      <NavBarVutton title="Settings" />
      <NavBarVutton title="baby" />
    </NavBar>
  ));
